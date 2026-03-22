// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MockWstETH {
    string public constant name = "Mock Wrapped stETH";
    string public constant symbol = "mwstETH";
    uint8 public constant decimals = 18;

    uint256 public stETHPerWstETH;
    uint256 public totalSupply;

    mapping(address account => uint256) public balanceOf;
    mapping(address owner => mapping(address spender => uint256)) public allowance;

    constructor(uint256 stETHPerWstETH_) {
        stETHPerWstETH = stETHPerWstETH_;
    }

    function setStETHPerWstETH(uint256 newRate) external {
        stETHPerWstETH = newRate;
    }

    function mint(address to, uint256 amount) external {
        totalSupply += amount;
        balanceOf[to] += amount;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        uint256 allowed = allowance[from][msg.sender];
        require(allowed >= amount, "allowance");
        require(balanceOf[from] >= amount, "balance");

        if (allowed != type(uint256).max) {
            allowance[from][msg.sender] = allowed - amount;
        }

        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        return true;
    }

    function getStETHByWstETH(uint256 wstETHAmount) external view returns (uint256) {
        return (wstETHAmount * stETHPerWstETH) / 1e18;
    }

    function getWstETHByStETH(uint256 stETHAmount) external view returns (uint256) {
        return (stETHAmount * 1e18) / stETHPerWstETH;
    }
}
