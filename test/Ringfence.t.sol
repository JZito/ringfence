// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import { RingfenceProduction } from "../contracts/RingfenceProduction.sol";
import { RingfenceDemoHarness } from "../contracts/RingfenceDemoHarness.sol";
import { MockRateFeed } from "./mocks/MockRateFeed.sol";
import { MockWstETH } from "./mocks/MockWstETH.sol";
import { TestBase } from "./utils/TestBase.sol";

contract RingfenceTest is TestBase {
    uint256 internal constant ONE = 1e18;

    address internal constant OWNER = address(0xA11CE);
    address internal constant AGENT = address(0xB0B);
    address internal constant RECIPIENT = address(0xCAFE);
    address internal constant OTHER = address(0xD00D);

    MockWstETH internal wstETH;
    MockRateFeed internal rateFeed;
    RingfenceProduction internal production;
    RingfenceDemoHarness internal demo;

    function setUp() public {
        wstETH = new MockWstETH(ONE);
        rateFeed = new MockRateFeed(int256(ONE));
        production = new RingfenceProduction(OWNER, address(wstETH), address(rateFeed));
        demo = new RingfenceDemoHarness(OWNER, address(wstETH), address(rateFeed));

        wstETH.mint(OWNER, 100 * ONE);

        vm.prank(OWNER);
        production.setAgent(AGENT);
        vm.prank(OWNER);
        demo.setAgent(AGENT);

        vm.prank(OWNER);
        production.setRecipientWhitelist(RECIPIENT, true);
        vm.prank(OWNER);
        demo.setRecipientWhitelist(RECIPIENT, true);

        vm.prank(OWNER);
        production.setPerTxCap(100 * ONE);
        vm.prank(OWNER);
        demo.setPerTxCap(100 * ONE);
    }

    function testDepositUpdatesPrincipalBaselineByValue() public {
        rateFeed.setAnswer(1_200_000_000_000_000_000);
        _deposit(address(production), 2 * ONE);

        assertEq(production.principalBaseline(), 2_400_000_000_000_000_000, "baseline should use stETH value");
        assertEq(production.getClaimableAmount(), 0, "claimable should start at zero");
    }

    function testProductionClaimableIsZeroWhenRateIsUnchanged() public {
        _deposit(address(production), 10 * ONE);

        assertEq(production.principalBaseline(), 10 * ONE, "baseline should equal deposited value at 1:1");
        assertEq(production.getClaimableAmount(), 0, "unchanged rate should not create claimable amount");
    }

    function testProductionClaimableTracksRateIncrease() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        uint256 expected = _wstETHFromStETH(ONE);
        assertEq(production.getClaimableAmount(), expected, "claimable should be value delta converted back to wstETH");
    }

    function testOwnerCanWithdrawPrincipalAndReduceBaselineAtCurrentRate() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_200_000_000_000_000_000);

        uint256 withdrawnAmount = 2 * ONE;
        uint256 withdrawnValue = _stETHValue(withdrawnAmount);
        uint256 baselineBefore = production.principalBaseline();

        vm.prank(OWNER);
        production.withdrawPrincipal(withdrawnAmount, OTHER);

        assertEq(wstETH.balanceOf(OTHER), withdrawnAmount, "recipient should receive withdrawn principal");
        assertEq(
            production.principalBaseline(),
            baselineBefore - withdrawnValue,
            "baseline should fall by the withdrawn value at the current rate"
        );
        assertTrue(
            production.getCurrentPositionValue() >= production.principalBaseline(),
            "remaining position value should still cover the reduced baseline"
        );
    }

    function testWithdrawPrincipalRevertsForUnauthorizedOwner() public {
        _deposit(address(production), 10 * ONE);

        vm.expectRevert(RingfenceProduction.UnauthorizedOwner.selector);
        vm.prank(OTHER);
        production.withdrawPrincipal(ONE, OWNER);
    }

    function testWithdrawPrincipalRevertsWhenWithdrawnValueExceedsBaseline() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(2 * int256(ONE));

        uint256 withdrawnAmount = 6 * ONE;
        uint256 withdrawnValue = _stETHValue(withdrawnAmount);
        vm.expectRevert(
            abi.encodeWithSelector(
                RingfenceProduction.AmountExceedsPrincipalBaseline.selector,
                withdrawnValue,
                production.principalBaseline()
            )
        );
        vm.prank(OWNER);
        production.withdrawPrincipal(withdrawnAmount, OWNER);
    }

    function testClaimRevertsForUnauthorizedAgent() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        vm.prank(OTHER);
        (bool ok,) =
            address(production).call(abi.encodeWithSelector(production.claim.selector, production.getClaimableAmount(), RECIPIENT));
        assertFalse(ok, "unauthorized caller should revert");
    }

    function testClaimRevertsForNonWhitelistedRecipient() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        vm.prank(AGENT);
        (bool ok,) =
            address(production).call(abi.encodeWithSelector(production.claim.selector, production.getClaimableAmount(), OTHER));
        assertFalse(ok, "non-whitelisted recipient should revert");
    }

    function testClaimRevertsWhenAmountExceedsCap() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_200_000_000_000_000_000);

        uint256 claimableBefore = production.getClaimableAmount();
        vm.prank(OWNER);
        production.setPerTxCap(claimableBefore - 1);

        vm.expectRevert(
            abi.encodeWithSelector(
                RingfenceProduction.AmountExceedsPerTxCap.selector,
                claimableBefore,
                claimableBefore - 1
            )
        );
        vm.prank(AGENT);
        production.claim(claimableBefore, RECIPIENT);
    }

    function testClaimRevertsWhenAmountExceedsClaimable() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        uint256 claimableBefore = production.getClaimableAmount();
        vm.expectRevert(
            abi.encodeWithSelector(
                RingfenceProduction.AmountExceedsClaimable.selector,
                claimableBefore + 1,
                claimableBefore
            )
        );
        vm.prank(AGENT);
        production.claim(claimableBefore + 1, RECIPIENT);
    }

    function testSuccessfulClaimPreservesProductionInvariant() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        uint256 claimableBefore = production.getClaimableAmount();
        vm.prank(AGENT);
        production.claim(claimableBefore, RECIPIENT);
        uint256 claimableAfter = production.getClaimableAmount();

        assertEq(wstETH.balanceOf(RECIPIENT), claimableBefore, "recipient should receive claimed wstETH");
        assertEq(claimableAfter, 0, "claiming the full amount should zero out claimable value");
        assertTrue(
            production.getCurrentPositionValue() >= production.principalBaseline(),
            "remaining position value must stay above the principal baseline"
        );
    }

    function testDemoGrantCreatesClaimableWithoutRateMove() public {
        _deposit(address(demo), 10 * ONE);

        vm.prank(OWNER);
        demo.demoGrantSpendableDelta(2 * ONE);

        uint256 claimableBefore = demo.getClaimableAmount();
        vm.prank(AGENT);
        demo.claim(claimableBefore, RECIPIENT);
        uint256 claimableAfter = demo.getClaimableAmount();

        assertEq(demo.demoSpendableDeltaStETH(), 2 * ONE, "demo delta should be observable");
        assertEq(claimableBefore, 2 * ONE, "demo delta should create claimable amount at 1:1 rate");
        assertEq(claimableAfter, 0, "full demo claim should consume the spendable delta");
    }

    function testDemoResetClearsSpendableDelta() public {
        _deposit(address(demo), 10 * ONE);

        vm.prank(OWNER);
        demo.demoGrantSpendableDelta(2 * ONE);
        assertEq(demo.getClaimableAmount(), 2 * ONE, "grant should create claimable amount");

        vm.prank(OWNER);
        demo.demoResetSpendableDelta();

        assertEq(demo.demoSpendableDeltaStETH(), 0, "reset should clear the stored demo delta");
        assertEq(demo.getClaimableAmount(), 0, "reset should clear demo claimability");
    }

    function testDemoWithdrawPrincipalPreservesExplicitSpendableDelta() public {
        _deposit(address(demo), 10 * ONE);

        vm.prank(OWNER);
        demo.demoGrantSpendableDelta(2 * ONE);

        vm.prank(OWNER);
        demo.withdrawPrincipal(4 * ONE, OTHER);

        assertEq(demo.principalBaseline(), 6 * ONE, "principal baseline should fall with the withdrawn value");
        assertEq(demo.getEffectivePrincipalBaseline(), 4 * ONE, "effective baseline should still reflect the demo delta");
        assertEq(demo.getClaimableAmount(), 2 * ONE, "withdrawing principal should not erase the explicit demo spendable delta");
    }

    function testProductionDoesNotExposeDemoFunction() public {
        (bool ok,) = address(production).call(abi.encodeWithSignature("demoGrantSpendableDelta(uint256)", ONE));
        assertFalse(ok, "production contract must not expose demo-only functions");

        (bool resetOk,) = address(production).call(abi.encodeWithSignature("demoResetSpendableDelta()"));
        assertFalse(resetOk, "production contract must not expose demo-only reset functions");
    }

    function testPartialClaimLeavesRemainder() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(1_100_000_000_000_000_000);

        uint256 fullClaimable = production.getClaimableAmount();
        uint256 half = fullClaimable / 2;
        vm.prank(AGENT);
        production.claim(half, RECIPIENT);

        uint256 remaining = production.getClaimableAmount();
        assertTrue(remaining > 0, "partial claim should leave remaining claimable");
        assertEq(wstETH.balanceOf(RECIPIENT), half, "recipient should receive half");
        assertTrue(
            production.getCurrentPositionValue() >= production.principalBaseline(),
            "principal baseline must remain protected after partial claim"
        );
    }

    function testMultipleDepositsAtDifferentRates() public {
        _deposit(address(production), 5 * ONE);
        uint256 baselineAfterFirst = production.principalBaseline();
        assertEq(baselineAfterFirst, 5 * ONE, "first deposit at 1:1 rate");

        rateFeed.setAnswer(1_200_000_000_000_000_000);
        wstETH.mint(OWNER, 5 * ONE);
        _deposit(address(production), 5 * ONE);

        // Second deposit: 5 wstETH at 1.2 rate = 6e18 stETH value. Total baseline = 5e18 + 6e18 = 11e18.
        uint256 expectedBaseline = 5 * ONE + _stETHValue(5 * ONE);
        assertEq(production.principalBaseline(), expectedBaseline, "cumulative baseline should reflect both rates");
    }

    function testClaimableIsZeroWhenRateDecreases() public {
        _deposit(address(production), 10 * ONE);
        rateFeed.setAnswer(900_000_000_000_000_000);

        assertEq(production.getClaimableAmount(), 0, "rate decrease must not create claimable amount");
        assertTrue(
            production.getCurrentPositionValue() < production.principalBaseline(),
            "current value should be below baseline when rate drops"
        );
    }

    function testRateReadsRevertWhenFeedIsStale() public {
        uint256 updatedAt = rateFeed.updatedAt();
        uint256 staleTimestamp = block.timestamp + production.MAX_RATE_AGE() + 1;
        vm.warp(staleTimestamp);

        vm.expectRevert(
            abi.encodeWithSelector(RingfenceProduction.StaleRateFeed.selector, updatedAt, staleTimestamp)
        );
        production.getCurrentPositionValue();
    }

    function testWithdrawPrincipalRevertsWhenFeedIsStale() public {
        _deposit(address(production), 10 * ONE);
        uint256 updatedAt = rateFeed.updatedAt();
        uint256 staleTimestamp = block.timestamp + production.MAX_RATE_AGE() + 1;
        vm.warp(staleTimestamp);

        vm.expectRevert(
            abi.encodeWithSelector(RingfenceProduction.StaleRateFeed.selector, updatedAt, staleTimestamp)
        );
        vm.prank(OWNER);
        production.withdrawPrincipal(ONE, OWNER);
    }

    function testDemoDeltaExceedingBaselineUnlocksFullBalance() public {
        _deposit(address(demo), 10 * ONE);

        vm.prank(OWNER);
        demo.demoGrantSpendableDelta(20 * ONE);

        assertEq(demo.getEffectivePrincipalBaseline(), 0, "effective baseline should be zero when delta exceeds baseline");
        uint256 claimable = demo.getClaimableAmount();
        uint256 vaultBalance = wstETH.balanceOf(address(demo));
        assertEq(claimable, vaultBalance, "full vault balance should be claimable when delta exceeds baseline");
    }

    function testDemoDeltaEqualToBaselineBoundary() public {
        _deposit(address(demo), 10 * ONE);

        vm.prank(OWNER);
        demo.demoGrantSpendableDelta(10 * ONE);

        assertEq(demo.getEffectivePrincipalBaseline(), 0, "effective baseline should be zero when delta equals baseline");
        uint256 claimable = demo.getClaimableAmount();
        uint256 vaultBalance = wstETH.balanceOf(address(demo));
        assertEq(claimable, vaultBalance, "full vault balance should be claimable at boundary");
    }

    function _deposit(address vault, uint256 amount) internal {
        vm.prank(OWNER);
        wstETH.approve(vault, amount);

        if (vault == address(production)) {
            vm.prank(OWNER);
            production.deposit(amount);
            return;
        }

        vm.prank(OWNER);
        demo.deposit(amount);
    }

    function _stETHValue(uint256 wstETHAmount) internal view returns (uint256) {
        return (wstETHAmount * uint256(rateFeed.answer())) / ONE;
    }

    function _wstETHFromStETH(uint256 stETHAmount) internal view returns (uint256) {
        return (stETHAmount * ONE) / uint256(rateFeed.answer());
    }
}
