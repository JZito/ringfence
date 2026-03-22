// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IRingfence {
    event Deposited(address indexed owner, uint256 wstETHAmount, uint256 newBaseline);
    event PrincipalWithdrawn(
        address indexed owner,
        address indexed recipient,
        uint256 wstETHAmount,
        uint256 withdrawnValue,
        uint256 newBaseline
    );
    event Claimed(address indexed agent, address indexed recipient, uint256 amount);
    event AgentSet(address indexed newAgent);
    event RecipientWhitelistUpdated(address indexed recipient, bool allowed);
    event PerTxCapUpdated(uint256 newCap);

    function owner() external view returns (address);
    function agent() external view returns (address);
    function wstETH() external view returns (address);
    function principalBaseline() external view returns (uint256);
    function getEffectivePrincipalBaseline() external view returns (uint256);
    function getCurrentPositionValue() external view returns (uint256);
    function getClaimableAmount() external view returns (uint256);
    function isRecipientWhitelisted(address recipient) external view returns (bool);
    function perTxCap() external view returns (uint256);

    function setAgent(address newAgent) external;
    function deposit(uint256 amount) external;
    function withdrawPrincipal(uint256 amount, address recipient) external;
    function setRecipientWhitelist(address recipient, bool allowed) external;
    function setPerTxCap(uint256 newCap) external;
    function claim(uint256 amount, address recipient) external;
}
