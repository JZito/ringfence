// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { RingfenceProduction } from "../contracts/RingfenceProduction.sol";
import { TestBase } from "./utils/TestBase.sol";

interface IERC20Like {
    function balanceOf(address account) external view returns (uint256);
}

interface IAggregatorLike {
    function latestRoundData() external view returns (uint80, int256, uint256, uint256, uint80);
}

contract RingfenceForkTest is TestBase {
    bool internal forkEnabled;
    address internal wstETHAddress;
    address internal rateFeedAddress;
    RingfenceProduction internal production;

    function setUp() public {
        string memory rpcUrl = vm.envOr("BASE_RPC_URL", "");
        string memory wstETHAddressString = vm.envOr("WSTETH_ADDRESS", "");
        if (bytes(rpcUrl).length == 0 || bytes(wstETHAddressString).length == 0) {
            return;
        }

        forkEnabled = true;
        vm.createSelectFork(rpcUrl);
        wstETHAddress = _parseAddress(wstETHAddressString);
        rateFeedAddress = _parseAddress(
            vm.envOr("WSTETH_STETH_RATE_FEED_ADDRESS", "0xB88BAc61a4Ca37C43a3725912B1f472c9A5bc061")
        );
        production = new RingfenceProduction(address(this), wstETHAddress, rateFeedAddress);
    }

    function testForkReadsLiveTokenBalanceShape() public view {
        if (!forkEnabled) {
            return;
        }

        uint256 balance = IERC20Like(wstETHAddress).balanceOf(address(production));
        assertEq(balance, 0, "fresh vault should start empty on fork");
    }

    function testForkCurrentValueIsZeroForEmptyVault() public view {
        if (!forkEnabled) {
            return;
        }

        assertEq(production.getCurrentPositionValue(), 0, "empty forked vault should have zero position value");
    }

    function testForkReadsLiveRateFeed() public view {
        if (!forkEnabled) {
            return;
        }

        (, int256 answer,, uint256 updatedAt,) = IAggregatorLike(rateFeedAddress).latestRoundData();
        assertTrue(answer > 0, "live rate feed should return a positive answer");
        assertTrue(updatedAt > 0, "live rate feed should have a timestamp");
        assertTrue(block.timestamp - updatedAt <= production.MAX_RATE_AGE(), "live rate feed should be fresh enough");
    }

    function _parseAddress(string memory value) internal pure returns (address parsed) {
        bytes memory raw = bytes(value);
        require(raw.length == 42, "bad address length");

        for (uint256 i = 2; i < 42; i += 2) {
            parsed = address(uint160(uint256(uint160(parsed)) * 256 + _fromHexChar(uint8(raw[i])) * 16 + _fromHexChar(uint8(raw[i + 1]))));
        }
    }

    function _fromHexChar(uint8 c) internal pure returns (uint160) {
        if (bytes1(c) >= bytes1("0") && bytes1(c) <= bytes1("9")) {
            return uint160(c) - uint160(uint8(bytes1("0")));
        }
        if (bytes1(c) >= bytes1("a") && bytes1(c) <= bytes1("f")) {
            return 10 + uint160(c) - uint160(uint8(bytes1("a")));
        }
        if (bytes1(c) >= bytes1("A") && bytes1(c) <= bytes1("F")) {
            return 10 + uint160(c) - uint160(uint8(bytes1("A")));
        }
        revert("bad hex char");
    }
}
