import { Command } from "commander";
import { isAddress, type Address } from "viem";

import { loadConfig } from "./config.js";
import {
  ownerDeposit,
  ownerGrantDemoDelta,
  ownerResetDemoDelta,
  ownerSetAgent,
  ownerSetPerTxCap,
  ownerSetWhitelist,
} from "./contracts.js";
import { normalizeCliArgv } from "./cli-argv.js";
import { loadEnvFiles } from "./env.js";
import { parseTokenAmount } from "./format.js";
import { runLocusSmoke } from "./locus-smoke.js";
import { runDailyDigest, runHourlyMonitor } from "./monitor.js";
import {
  runAgentApproveSwapStep,
  runAgentClaimStep,
  runAgentSwapStep,
  runAgentTopupLocusStep,
  runMonitorPreflight,
  showState,
} from "./runtime.js";
import { startDashboardService } from "./service.js";
import type { ContractKind } from "./types.js";

loadEnvFiles();

function parseContractKind(value: string): ContractKind {
  if (value !== "production" && value !== "demo") {
    throw new Error(`Invalid contract kind: ${value}`);
  }

  return value;
}

function parseAddress(value: string, label: string): Address {
  if (!isAddress(value)) {
    throw new Error(`${label} must be a valid address`);
  }

  return value;
}

function parseBooleanFlag(value: string): boolean {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  throw new Error(`Expected true or false, received: ${value}`);
}

async function main() {
  const program = new Command();
  const getConfig = () => loadConfig();

  program.name("ringfence").description("Ringfence governance monitor CLI").showHelpAfterError();

  program
    .command("state")
    .requiredOption("--contract <kind>", "production or demo")
    .action(async (options) => {
      await showState(getConfig(), parseContractKind(options.contract));
    });

  const owner = program.command("owner");
  owner
    .command("deposit")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .action(async (options) => {
      await ownerDeposit(getConfig(), parseContractKind(options.contract), parseTokenAmount(options.amount));
    });

  owner
    .command("set-agent")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--agent <address>", "agent address")
    .action(async (options) => {
      await ownerSetAgent(getConfig(), parseContractKind(options.contract), parseAddress(options.agent, "agent"));
    });

  owner
    .command("whitelist")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--recipient <address>", "recipient address")
    .requiredOption("--allowed <boolean>", "true or false")
    .action(async (options) => {
      await ownerSetWhitelist(
        getConfig(),
        parseContractKind(options.contract),
        parseAddress(options.recipient, "recipient"),
        parseBooleanFlag(options.allowed),
      );
    });

  owner
    .command("set-cap")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .action(async (options) => {
      await ownerSetPerTxCap(getConfig(), parseContractKind(options.contract), parseTokenAmount(options.amount));
    });

  owner
    .command("demo-grant-delta")
    .requiredOption("--amount <amount>", "stETH-value amount in decimal units")
    .action(async (options) => {
      await ownerGrantDemoDelta(getConfig(), parseTokenAmount(options.amount));
    });

  owner.command("demo-reset-delta").action(async () => {
    await ownerResetDemoDelta(getConfig());
  });

  const demo = program.command("demo").description("Demo utilities");
  demo
    .command("fail-claim")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .requiredOption("--recipient <address>", "recipient address")
    .action(async (options) => {
      const { agentFailClaim } = await import("./contracts.js");
      const result = await agentFailClaim(
        getConfig(),
        parseContractKind(options.contract),
        parseTokenAmount(options.amount),
        parseAddress(options.recipient, "recipient"),
      );

      const likelyCause =
        result.violations.length > 0 ? result.violations.join(", ") : "unknown_revert_path";

      console.log("[OK] fail-claim: Claim reverted as expected");
      console.log(
        JSON.stringify(
          {
            step: "fail-claim",
            status: "ok",
            message: "Claim reverted as expected",
            contractKind: options.contract,
            amount: result.amount.toString(),
            recipient: result.recipient,
            recipientWhitelisted: result.recipientWhitelisted,
            claimableAmount: result.stateBefore.claimableAmount.toString(),
            perTxCap: result.stateBefore.perTxCap.toString(),
            likelyCause,
            violations: result.violations,
            rawReason: result.reason,
          },
          null,
          2,
        ),
      );
    });

  demo
    .command("fail-withdraw-principal")
    .requiredOption("--contract <kind>", "production or demo")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .requiredOption("--recipient <address>", "recipient address")
    .action(async (options) => {
      const { agentFailWithdrawPrincipal } = await import("./contracts.js");
      const result = await agentFailWithdrawPrincipal(
        getConfig(),
        parseContractKind(options.contract),
        parseTokenAmount(options.amount),
        parseAddress(options.recipient, "recipient"),
      );

      console.log("[OK] fail-withdraw-principal: Unauthorized withdraw reverted onchain as expected");
      console.log(
        JSON.stringify(
          {
            step: "fail-withdraw-principal",
            status: "ok",
            message: "Unauthorized withdraw reverted onchain as expected",
            contractKind: options.contract,
            txHash: result.txHash,
            amount: result.amount.toString(),
            recipient: result.recipient,
            agent: result.agent,
            owner: result.owner,
            likelyCause: result.likelyCause,
            rawReason: result.reason,
            principalBaselineBefore: result.stateBefore.principalBaseline.toString(),
            principalBaselineAfter: result.stateAfter.principalBaseline.toString(),
            vaultBalanceBefore: result.stateBefore.vaultBalanceWstETH.toString(),
            vaultBalanceAfter: result.stateAfter.vaultBalanceWstETH.toString(),
            claimableBefore: result.stateBefore.claimableAmount.toString(),
            claimableAfter: result.stateAfter.claimableAmount.toString(),
          },
          null,
          2,
        ),
      );
    });

  const agent = program.command("agent");
  agent
    .command("claim")
    .requiredOption("--contract <kind>", "production or demo")
    .option("--amount <amount>", "wstETH amount in decimal units")
    .action(async (options) => {
      await runAgentClaimStep(
        getConfig(),
        parseContractKind(options.contract),
        options.amount ? parseTokenAmount(options.amount) : undefined,
      );
    });

  agent
    .command("approve-swap")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .action(async (options) => {
      await runAgentApproveSwapStep(getConfig(), parseTokenAmount(options.amount));
    });

  agent
    .command("swap")
    .requiredOption("--amount <amount>", "wstETH amount in decimal units")
    .action(async (options) => {
      await runAgentSwapStep(getConfig(), parseTokenAmount(options.amount));
    });

  agent
    .command("topup-locus")
    .option("--amount <amount>", "USDC amount in decimal units")
    .action(async (options) => {
      await runAgentTopupLocusStep(getConfig(), options.amount ? parseTokenAmount(options.amount, 6) : undefined);
    });

  const locus = program.command("locus").description("Locus-only verification commands");
  locus
    .command("smoke")
    .option("--topic-url <url>", "Forum topic URL to use for the Diffbot/Gemini smoke test")
    .option("--skip-notify", "Skip the Telegram send step")
    .action(async (options) => {
      await runLocusSmoke(getConfig(), {
        topicUrl: options.topicUrl,
        skipNotify: options.skipNotify === true,
      });
    });

  const monitor = program.command("monitor").description("Governance monitor commands");
  monitor
    .command("preflight")
    .option("--contract <kind>", "production or demo")
    .action(async (options) => {
      const config = getConfig();
      await runMonitorPreflight(config, options.contract ? parseContractKind(options.contract) : config.monitorContractKind);
    });

  monitor
    .command("hourly")
    .option("--contract <kind>", "production or demo")
    .action(async (options) => {
      const config = getConfig();
      await runHourlyMonitor(config, options.contract ? parseContractKind(options.contract) : config.monitorContractKind, "manual_hourly");
    });

  monitor
    .command("digest")
    .option("--contract <kind>", "production or demo")
    .action(async (options) => {
      const config = getConfig();
      await runDailyDigest(config, options.contract ? parseContractKind(options.contract) : config.monitorContractKind, "manual_digest");
    });

  monitor.command("serve").action(async () => {
    await startDashboardService(getConfig());
  });

  await program.parseAsync(normalizeCliArgv(process.argv));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
