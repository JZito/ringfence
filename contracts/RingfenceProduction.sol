// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { IRingfence } from "./interfaces/IRingfence.sol";
import { IAggregatorV3 } from "./interfaces/IAggregatorV3.sol";
import { IERC20 } from "./interfaces/IERC20.sol";

contract RingfenceProduction is IRingfence {
    error UnauthorizedOwner();
    error UnauthorizedAgent();
    error ZeroAddress();
    error ZeroAmount();
    error RecipientNotWhitelisted(address recipient);
    error AmountExceedsPerTxCap(uint256 requestedAmount, uint256 perTxCap);
    error AmountExceedsClaimable(uint256 requestedAmount, uint256 claimableAmount);
    error AmountExceedsPrincipalBaseline(uint256 requestedValue, uint256 principalBaselineValue);
    error ERC20TransferFailed();
    error InvalidRateFeedAnswer();
    error StaleRateFeed(uint256 updatedAt, uint256 currentTimestamp);

    address public immutable override owner;
    address public override agent;
    address public immutable override wstETH;
    address public immutable wstETHStEthRateFeed;
    uint256 public constant MAX_RATE_AGE = 2 days;
    uint256 public override principalBaseline;
    uint256 public override perTxCap;
    uint256 internal immutable rateFeedScale;

    mapping(address recipient => bool allowed) private recipientWhitelist;

    constructor(address owner_, address wstETH_, address wstETHStEthRateFeed_) {
        if (owner_ == address(0) || wstETH_ == address(0) || wstETHStEthRateFeed_ == address(0)) {
            revert ZeroAddress();
        }

        owner = owner_;
        wstETH = wstETH_;
        wstETHStEthRateFeed = wstETHStEthRateFeed_;
        rateFeedScale = 10 ** IAggregatorV3(wstETHStEthRateFeed_).decimals();
    }

    function getCurrentPositionValue() public view override returns (uint256) {
        uint256 rate = _getCurrentRate();
        return _convertWstETHToStETH(IERC20(wstETH).balanceOf(address(this)), rate);
    }

    function getClaimableAmount() public view virtual override returns (uint256) {
        uint256 rate = _getCurrentRate();
        uint256 currentValue = _convertWstETHToStETH(IERC20(wstETH).balanceOf(address(this)), rate);
        uint256 effectiveBaseline = _effectivePrincipalBaseline();

        if (currentValue <= effectiveBaseline) {
            return 0;
        }

        return _convertStETHToWstETH(currentValue - effectiveBaseline, rate);
    }

    function isRecipientWhitelisted(address recipient) external view override returns (bool) {
        return recipientWhitelist[recipient];
    }

    function getEffectivePrincipalBaseline() public view override returns (uint256) {
        return _effectivePrincipalBaseline();
    }

    function setAgent(address newAgent) external override onlyOwner {
        if (newAgent == address(0)) {
            revert ZeroAddress();
        }

        agent = newAgent;
        emit AgentSet(newAgent);
    }

    function deposit(uint256 amount) external override onlyOwner {
        if (amount == 0) {
            revert ZeroAmount();
        }

        uint256 rate = _getCurrentRate();
        _safeTransferFrom(wstETH, msg.sender, address(this), amount);
        principalBaseline += _convertWstETHToStETH(amount, rate);
        emit Deposited(msg.sender, amount, principalBaseline);
    }

    function withdrawPrincipal(uint256 amount, address recipient) external override onlyOwner {
        if (amount == 0) {
            revert ZeroAmount();
        }
        if (recipient == address(0)) {
            revert ZeroAddress();
        }

        uint256 rate = _getCurrentRate();
        uint256 withdrawnValue = _convertWstETHToStETH(amount, rate);
        uint256 baseline = principalBaseline;
        if (withdrawnValue > baseline) {
            revert AmountExceedsPrincipalBaseline(withdrawnValue, baseline);
        }

        principalBaseline = baseline - withdrawnValue;
        _safeTransfer(wstETH, recipient, amount);
        emit PrincipalWithdrawn(msg.sender, recipient, amount, withdrawnValue, principalBaseline);
    }

    function setRecipientWhitelist(address recipient, bool allowed) external override onlyOwner {
        if (recipient == address(0)) {
            revert ZeroAddress();
        }

        recipientWhitelist[recipient] = allowed;
        emit RecipientWhitelistUpdated(recipient, allowed);
    }

    function setPerTxCap(uint256 newCap) external override onlyOwner {
        perTxCap = newCap;
        emit PerTxCapUpdated(newCap);
    }

    function claim(uint256 amount, address recipient) external override onlyAgent {
        if (amount == 0) {
            revert ZeroAmount();
        }
        if (!recipientWhitelist[recipient]) {
            revert RecipientNotWhitelisted(recipient);
        }
        if (amount > perTxCap) {
            revert AmountExceedsPerTxCap(amount, perTxCap);
        }

        uint256 claimableAmount = getClaimableAmount();
        if (amount > claimableAmount) {
            revert AmountExceedsClaimable(amount, claimableAmount);
        }

        _safeTransfer(wstETH, recipient, amount);
        emit Claimed(msg.sender, recipient, amount);
    }

    function _effectivePrincipalBaseline() internal view virtual returns (uint256) {
        return principalBaseline;
    }

    function _getCurrentRate() internal view returns (uint256) {
        (, int256 answer,, uint256 updatedAt,) = IAggregatorV3(wstETHStEthRateFeed).latestRoundData();
        if (answer <= 0 || updatedAt == 0) {
            revert InvalidRateFeedAnswer();
        }
        if (updatedAt > block.timestamp || block.timestamp - updatedAt > MAX_RATE_AGE) {
            revert StaleRateFeed(updatedAt, block.timestamp);
        }

        return uint256(answer);
    }

    function _convertWstETHToStETH(uint256 wstETHAmount, uint256 rate) internal view returns (uint256) {
        return (wstETHAmount * rate) / rateFeedScale;
    }

    function _convertStETHToWstETH(uint256 stETHAmount, uint256 rate) internal view returns (uint256) {
        return (stETHAmount * rateFeedScale) / rate;
    }

    function _safeTransfer(address token, address to, uint256 amount) internal {
        if (!IERC20(token).transfer(to, amount)) {
            revert ERC20TransferFailed();
        }
    }

    function _safeTransferFrom(address token, address from, address to, uint256 amount) internal {
        if (!IERC20(token).transferFrom(from, to, amount)) {
            revert ERC20TransferFailed();
        }
    }

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert UnauthorizedOwner();
        }
        _;
    }

    modifier onlyAgent() {
        if (msg.sender != agent) {
            revert UnauthorizedAgent();
        }
        _;
    }
}
