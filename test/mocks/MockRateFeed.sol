// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MockRateFeed {
    uint8 public constant decimals = 18;

    int256 public answer;
    uint256 public updatedAt;
    uint80 internal roundId = 1;

    constructor(int256 initialAnswer) {
        answer = initialAnswer;
        updatedAt = block.timestamp;
    }

    function setAnswer(int256 newAnswer) external {
        answer = newAnswer;
        updatedAt = block.timestamp;
        roundId += 1;
    }

    function latestRoundData() external view returns (uint80, int256, uint256, uint256, uint80) {
        return (roundId, answer, updatedAt, updatedAt, roundId);
    }
}
