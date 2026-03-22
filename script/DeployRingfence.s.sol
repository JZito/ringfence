// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { BaseScript } from "./BaseScript.sol";
import { RingfenceProduction } from "../contracts/RingfenceProduction.sol";
import { RingfenceDemoHarness } from "../contracts/RingfenceDemoHarness.sol";

contract DeployRingfence is BaseScript {
    function run() external returns (RingfenceProduction production, RingfenceDemoHarness demo) {
        address ownerAddress = vm.envAddress("OWNER_ADDRESS");
        address wstETHAddress = vm.envAddress("WSTETH_ADDRESS");
        address rateFeedAddress = vm.envAddress("WSTETH_STETH_RATE_FEED_ADDRESS");
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        production = new RingfenceProduction(ownerAddress, wstETHAddress, rateFeedAddress);
        demo = new RingfenceDemoHarness(ownerAddress, wstETHAddress, rateFeedAddress);
        vm.stopBroadcast();

        string memory root = "ringfence";
        vm.serializeUint(root, "chainId", block.chainid);
        vm.serializeAddress(root, "owner", ownerAddress);
        vm.serializeAddress(root, "wstETH", wstETHAddress);
        vm.serializeAddress(root, "production", address(production));
        string memory json = vm.serializeAddress(root, "demo", address(demo));
        vm.writeJson(json, "./config/deployments.json");
    }
}
