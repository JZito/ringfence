// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { RingfenceProduction } from "./RingfenceProduction.sol";

contract RingfenceDemoHarness is RingfenceProduction {
    event DemoSpendableDeltaGranted(uint256 deltaStETH, uint256 newTotal);
    event DemoSpendableDeltaReset();

    uint256 public demoSpendableDeltaStETH;

    constructor(address owner_, address wstETH_, address wstETHStEthRateFeed_)
        RingfenceProduction(owner_, wstETH_, wstETHStEthRateFeed_)
    {}

    /// @notice Demo-only helper that creates bounded spendable capacity for a live demo.
    /// @dev This does not represent fresh Lido yield. It only lowers the effective locked baseline.
    function demoGrantSpendableDelta(uint256 deltaStETH) external onlyOwner {
        if (deltaStETH == 0) {
            revert ZeroAmount();
        }

        demoSpendableDeltaStETH += deltaStETH;
        emit DemoSpendableDeltaGranted(deltaStETH, demoSpendableDeltaStETH);
    }

    /// @notice Demo-only helper that clears the explicit demo spendable delta.
    /// @dev This exists for repeatable demos. It is not part of the production primitive.
    function demoResetSpendableDelta() external onlyOwner {
        demoSpendableDeltaStETH = 0;
        emit DemoSpendableDeltaReset();
    }

    function _effectivePrincipalBaseline() internal view override returns (uint256) {
        uint256 baseline = principalBaseline;
        uint256 delta = demoSpendableDeltaStETH;

        if (delta >= baseline) {
            return 0;
        }

        return baseline - delta;
    }
}
