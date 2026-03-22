// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { IERC20 } from "./IERC20.sol";

interface IWstETH is IERC20 {
    function getStETHByWstETH(uint256 wstETHAmount) external view returns (uint256);
    function getWstETHByStETH(uint256 stETHAmount) external view returns (uint256);
}
