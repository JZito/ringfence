You are a senior smart contract engineer and systems builder tasked with implementing “Ringfence,” a hackathon-grade but architecturally correct agent treasury system on Base mainnet.

You are not here to explore.
You are not here to brainstorm.
You are here to execute precisely against a locked specification.

Your output must be:
- minimal
- correct
- legible
- production-minded where required
- explicitly demo-aware where required

You must behave like a top-tier engineer under time constraint, not a code assistant.

-----------------------------------
PRIMARY OBJECTIVE
-----------------------------------

Implement Ringfence exactly as specified, with:

1. A correct production contract that demonstrates:
   - principal protection
   - correct wstETH value-based accounting
   - enforced permission controls

2. A demo harness that:
   - preserves the same interface
   - includes one explicit, clearly labeled demo-only delta mechanism
   - enables a live claim → swap → pay loop

3. A working agent runtime that:
   - reads claimable value
   - claims spendable wstETH
   - swaps to USDC via Uniswap (real tx)
   - pays via Locus (real payment)
   - sends a real email receipt

4. A minimal interface (CLI or UI) that:
   - exposes state clearly
   - orchestrates the demo

-----------------------------------
CRITICAL ENGINEERING PRINCIPLES
-----------------------------------

1. DO NOT INVENT FEATURES

If it is not in the spec, do not add it.

Avoid:
- upgradeability
- role hierarchies beyond owner/agent
- unnecessary abstractions
- plugin systems
- “future-proofing”

This is a tight primitive + demo, not a platform.

-----------------------------------

2. RESPECT THE wstETH MODEL

wstETH is NON-REBASING.

You must NOT:
- assume token balance increases
- fake yield via token math
- rely on naive “balance > principal” logic

You MUST:
- track principal baseline in VALUE TERMS
- define claimable = current value - principal baseline

Be explicit and correct about how value is derived.

If using a rate:
- document the source clearly
- keep it simple and deterministic

This is the core intellectual requirement of the Lido track.

-----------------------------------

3. MAKE PRINCIPAL PROTECTION OBVIOUS

A reviewer should be able to see in seconds that:

- the agent cannot touch principal
- claims are bounded
- constraints are enforced onchain

Prefer:
- simple, explicit checks
- clear revert conditions
- minimal indirection

Avoid:
- hidden logic
- clever but opaque patterns

-----------------------------------

4. DEMO HARNESS MUST BE HONEST

The demo harness must:

- clearly expose a demo-only function
- never pretend to generate real yield
- never obscure its behavior

Naming must be explicit:
- demoGrantSpendableDelta (or similar)

Add comments that make this impossible to misinterpret.

-----------------------------------

5. WRITE CODE FOR JUDGES, NOT JUST MACHINES

Your code should optimize for:

- readability in a GitHub repo
- clarity in a demo walkthrough
- fast comprehension by reviewers

That means:
- short functions
- explicit naming
- inline comments where it matters
- no unnecessary abstraction layers

-----------------------------------

6. FAIL LOUDLY AND CORRECTLY

All critical paths must:

- revert on invalid conditions
- never silently fail
- never continue after failure

Especially:
- claim()
- swap execution
- payment execution

-----------------------------------

7. MINIMIZE EXTERNAL COMPLEXITY

For integrations:

Uniswap:
- use the simplest viable path
- deterministic parameters
- clear slippage handling

Locus:
- exactly one wrapped API call
- exactly one email send
- no additional flows

-----------------------------------

8. LOG EVERYTHING THAT MATTERS

Agent runtime must clearly log:

- claimable amount
- claim tx
- swap quote
- swap tx
- USDC received
- Locus payment
- email send status
- final balances

Logs must be:
- human-readable
- structured enough to verify

-----------------------------------
IMPLEMENTATION STRATEGY
-----------------------------------

You will proceed in this order:

Step 1 — Contracts (CORE FIRST)
- Implement RingfenceProduction.sol
- Implement RingfenceDemoHarness.sol
- Ensure shared interface

Step 2 — Contract Validation
- Walk through each function mentally
- Verify all constraints
- Confirm principal cannot be touched

Step 3 — Agent Runtime
- Build minimal script (TS or Python)
- Implement exact execution loop:
  read → claim → swap → pay → email

Step 4 — Integrations
- Wire Uniswap swap (real tx)
- Wire Locus API + email

Step 5 — Minimal Interface
- CLI or minimal UI
- Focus on state visibility, not polish

-----------------------------------
OUTPUT FORMAT
-----------------------------------

When generating code:

1. DO NOT dump everything at once.
2. Work in structured phases.

For each phase:

- Explain the approach briefly (2–4 sentences max)
- Output clean, complete code
- Highlight any assumptions

-----------------------------------
CONTRACT DESIGN REQUIREMENTS
-----------------------------------

- Solidity ^0.8.x
- No upgradeability
- No unnecessary inheritance trees
- Prefer explicit state over abstraction
- Use custom errors where helpful
- Keep storage layout simple

-----------------------------------
COMMON FAILURE MODES TO AVOID
-----------------------------------

You must actively avoid:

- treating wstETH like rebasing stETH
- leaking principal via incorrect math
- overcomplicating value calculation
- writing “framework-like” contracts
- hiding demo logic behind vague naming
- adding unnecessary config or roles
- building UI before core system works
- mocking external integrations

-----------------------------------
DEFINITION OF DONE (ENGINEERING VIEW)
-----------------------------------

You are done when:

- production contract is simple, correct, and provably safe
- demo harness clearly enables delta without ambiguity
- agent can:
  - claim
  - swap
  - pay
  - send receipt
- all steps produce real tx hashes on Base
- the system can be demonstrated end-to-end in one flow

-----------------------------------
FINAL MINDSET
-----------------------------------

You are building a primitive + proof.

Not a startup.
Not a protocol suite.
Not a dashboard.

The goal is:

maximum clarity
maximum correctness
maximum demo impact

Every line of code should serve that goal.

If something feels clever, remove it.
If something feels unclear, simplify it.
If something is not required, delete it.

Build like a ruthless, high-taste engineer. Take a deep breath and begin the process of planning this project:
 

Ringfence — Canonical Feature Specification
Version

v1.0

Status

Locked implementation spec for hackathon build

Product Name

Ringfence

Tagline

A yield-backed operating treasury for AI agents: principal is untouchable, spendable budget is constrained, and live payments are executed in USDC on Base.

1. Product Summary

Ringfence is a contract primitive plus agent runtime that lets a human fund an AI agent with a yield-bearing treasury backed by wstETH, while making the principal structurally inaccessible to the agent.

The system consists of:

a production vault contract that implements the canonical principal-protection logic for non-rebasing wstETH

a demo harness contract that preserves the same interface but includes an explicit demo-only mechanism to create a live spendable delta for presentation purposes

an agent runtime that queries available spendable budget, claims it, swaps wstETH to USDC through Uniswap on Base, and pays for services through Locus

a live payment flow on Base mainnet using Locus wrapped APIs and email receipts

The demo must show:

principal protected by contract

spendable balance queryable by agent

at least one enforced permission control

real swap to USDC through Uniswap

real payment via Locus

real email receipt to human operator

2. Build Objective

Deliver a live Base-mainnet system that proves the following:

A human can deposit wstETH into a contract-controlled treasury.

The AI agent cannot access principal.

The AI agent can access only a bounded spendable delta.

The spendable delta can be converted to USDC on Base via Uniswap.

The agent can use that USDC through Locus to pay for a real service and send a real receipt email.

The contract includes at least one configurable onchain permission control required by the Lido bounty.

3. Scope
In Scope

Base mainnet deployment

Base-native wstETH as backing asset

USDC on Base as spend asset

production contract with correct value-based wstETH accounting

demo harness contract with explicit demo-only delta injection

Uniswap API integration and real swap tx

Locus integration for one wrapped API call and one email

minimal frontend or CLI for state visibility and demo orchestration

full onchain receipts and transaction hashes

public repository and README

Out of Scope

staking flow from ETH to stETH/wstETH

bridging UX

full treasury management dashboard

plugin framework

multi-agent coordination

yield strategy optimization

automated rebalancing

vault withdrawal/closure flows beyond what is required for demo

production-ready audit hardening beyond clean hackathon-safe implementation

generalized support for other yield-bearing assets

4. Target Tracks
Primary

Lido — stETH Agent Treasury

Locus — Best Use of Locus

Uniswap — Agentic Finance

Synthesis Open Track

Secondary

any open-track consideration driven by strong onchain demo, agent autonomy, and architecture clarity

5. Core Product Requirements
5.1 Principal Protection

The human’s principal must be structurally inaccessible to the agent.

5.2 Spendable Balance

The agent must be able to query the currently available spendable balance.

5.3 Permission Controls

The contract must enforce at least one configurable permission control at the contract level.

5.4 Real Asset Flow

The system must use real wstETH, real USDC, real Uniswap swap execution, and real Locus payments.

5.5 Demoability

The system must support a live demo on Base mainnet without depending on waiting for a daily oracle/rate update.

6. System Architecture
6.1 Contracts
A. RingfenceProduction

Canonical vault contract for production logic.

Responsibilities:

hold wstETH principal

track principal baseline in value terms

expose claimable spendable delta logic

enforce permission controls

allow only agent-authorized spendable claims

contain no demo backdoor

B. RingfenceDemoHarness

Demo contract that mirrors the production interface and behavior, but includes one explicit demo-only function to create a spendable delta.

Responsibilities:

preserve all production behaviors

expose explicit demo-only delta adjustment

make live demo possible without waiting for a rate update

6.2 Agent Runtime

Responsibilities:

read contract state

determine claimable amount

claim spendable wstETH from demo harness

quote and execute Uniswap swap from wstETH to USDC

call one Locus wrapped API

send one Locus-powered email receipt

log intent, amounts, and outcomes

6.3 External Services
Uniswap

Used to convert claimed wstETH into USDC on Base.

Locus

Used as the Base-native USDC payment layer for:

one wrapped API call

one Resend email receipt

6.4 Frontend or CLI

Minimal operator interface for:

displaying balances and permissions

triggering deposit and demo flows

displaying tx hashes and final state

7. Chain and Asset Decisions
Chain

Base mainnet

Backing Asset

wstETH on Base

Spend Asset

USDC on Base

Swap Venue

Uniswap on Base using real API key and real tx execution

Payment Rail

Locus on Base using real wallet/API credentials and real payments

8. Contract Design
8.1 Shared Design Principles

Both contracts must share the same core public interface wherever possible.

Both contracts must:

be non-upgradeable

avoid admin ambiguity

keep logic compact and legible

enforce principal protection and spend controls clearly

be documented inline

8.2 Production Accounting Model

wstETH is non-rebasing. Production accounting must therefore track principal in value terms, not by assuming token count increases.

The production contract must record a principal baseline using one of the following equivalent value models:

stETH-denominated value baseline using the current wstETH↔stETH conversion/rate

feed-derived value baseline using a rate feed appropriate for Base and the chosen implementation

The claimable spendable delta in production is defined conceptually as:

current position value minus locked principal baseline

The production contract is the canonical artifact proving correct understanding of the Lido asset model.

8.3 Demo Harness Accounting Model

The demo harness must preserve the same outward structure and claim logic, but include one explicit demo-only method for creating a spendable delta.

This is not to be described as live newly accrued yield. It is a demo-initialized spendable delta for the purposes of showing the full live operating loop on Base.

The demo harness exists solely to make the live Base claim → swap → pay flow demonstrable under hackathon time constraints.

9. Contract Functional Requirements
9.1 Roles
Human Owner

The depositor and controller of configuration.

Permissions:

set agent address

deposit wstETH

configure whitelist and caps

call demo-only function on demo harness

Agent

The only address allowed to claim spendable value.

Permissions:

query claimable amount

claim allowed amount to approved recipient

9.2 Required State Variables
Shared / Conceptual State

owner

agent

wstETH token address

principal baseline

recipient whitelist

per-transaction cap

optional claim cooldown

optional claim recipient restrictions

Demo Harness Additional State

explicit demo spendable delta adjustment mechanism or equivalent tracked offset

9.3 Required Configurable Permission Controls

At minimum, implement both:

Recipient Whitelist

Only approved recipient addresses can receive claimed spendable funds.

Per-Transaction Cap

Each claim must be less than or equal to a configured cap.

Optional additional control:

Time Window / Cooldown

Claims can only occur after a cooldown interval.

10. Contract Public Interface
10.1 Required Read Functions
owner()

Returns owner address.

agent()

Returns agent address.

principalBaseline()

Returns the current locked principal baseline according to the chosen accounting model.

getCurrentPositionValue()

Returns current value of the contract’s held wstETH position according to chosen accounting model.

getClaimableAmount()

Returns the currently available spendable amount.

isRecipientWhitelisted(address)

Returns whether an address is approved.

perTxCap()

Returns current per-transaction cap.

claimCooldown()

Returns cooldown, if implemented.

lastClaimTimestamp()

Returns last claim timestamp, if implemented.

10.2 Required Write Functions
setAgent(address newAgent)

Owner-only.

deposit(uint256 amount)

Owner-only. Deposits wstETH into contract and updates principal baseline accordingly.

setRecipientWhitelist(address recipient, bool allowed)

Owner-only.

setPerTxCap(uint256 newCap)

Owner-only.

setClaimCooldown(uint256 newCooldown)

Owner-only, if cooldown implemented.

claim(uint256 amount, address recipient)

Agent-only.
Must:

enforce whitelist

enforce cap

enforce cooldown, if present

enforce amount <= currently claimable

transfer claimed wstETH to approved recipient

demoAdjustSpendableDelta(...)

Demo harness only.
Owner-only.
Must be explicitly named and documented as demo-only.

11. Contract Behavior Requirements
11.1 Deposit Behavior

When owner deposits wstETH:

contract receives wstETH

principal baseline is updated according to the contract’s accounting model

no spendable amount is automatically created unless dictated by existing demo offset logic in the demo harness

11.2 Claim Behavior

When agent claims:

recipient must be whitelisted

amount must be within cap

amount must be within available spendable amount

claim succeeds only if all constraints pass

principal baseline must remain protected

11.3 Failure Behavior

The contract must revert when:

caller is unauthorized

recipient is not whitelisted

requested amount exceeds cap

requested amount exceeds claimable amount

claim occurs before cooldown expires, if cooldown is implemented

12. Demo Harness Requirements
12.1 Purpose

The demo harness exists to enable a live Base-mainnet demonstration of the full economic loop.

12.2 Explicit Constraints

The demo harness:

must not be presented as the canonical production primitive

must not hide the existence of the demo-only function

must not be described as generating fresh real Lido yield

12.3 Naming

The demo harness contract name must clearly indicate demo status, for example:

RingfenceDemoHarness

The demo-only function must clearly indicate demo status, for example:

demoGrantSpendableDelta

demoReducePrincipalBaselineForDemo

Do not use ambiguous names that imply real yield accrual.

13. Uniswap Integration Specification
13.1 Objective

Convert claimed wstETH into spendable USDC on Base mainnet.

13.2 Requirements

use real Uniswap API key from Developer Platform

produce real quote and execution tx

produce real tx hash on Base mainnet

use live onchain liquidity

include slippage protection

keep configuration simple and deterministic

13.3 Swap Path

Input:

claimed wstETH

Output:

USDC on Base

13.4 Agent Responsibilities

The agent must:

request or compute quote

verify expected output and slippage bounds

execute swap

wait for confirmation

record tx hash and received USDC amount

13.5 Configurable Parameters

input token address

output token address

amount in

slippage bps

recipient address

13.6 Failure Handling

If swap fails:

abort subsequent payment steps

surface error clearly

do not silently continue

14. Locus Integration Specification
14.1 Objective

Use spendable USDC on Base to pay for a real agent action and send a human-visible receipt.

14.2 Required Locus Components

Use:

one Locus wallet / USDC balance

one wrapped API call

one email send flow

14.3 Wrapped API Requirement

The agent must pay for exactly one primary external service through Locus wrapped APIs.

Preferred choice:

Firecrawl scrape

Acceptable alternative:

OpenAI or Gemini call through Locus wrapped APIs

14.4 Email Requirement

The agent must use Locus-backed email sending to deliver a receipt/status update to the human operator.

The email must include:

claim amount in wstETH

USDC received from swap

amount spent on primary API call

amount spent on email

remaining spendable balance

confirmation that principal remains protected

14.5 Locus Guardrails

Locus spending controls should be configured where possible to reinforce the bounded-operating-budget narrative:

allowance

per-tx limit

approval threshold if useful

14.6 Failure Handling

If wrapped API call fails:

do not silently continue

do not fake success email

surface error state clearly

If email send fails:

surface error and tx status

do not claim completion of full loop

15. Agent Runtime Specification
15.1 Runtime Form

Simple script or minimal service in TypeScript or Python.

No heavy framework required.

15.2 Core Loop

The agent’s execution sequence must be:

Read claimable amount from selected contract.

Validate that claimable amount is positive and within expected bounds.

Claim spendable wstETH to approved swap/execution recipient.

Quote wstETH → USDC via Uniswap.

Execute swap.

Confirm USDC balance.

Call one Locus wrapped API.

Send one Locus-powered email receipt.

Output full logs and tx hashes.

15.3 Required Logging

The agent must produce machine-readable and human-readable logs containing:

contract address used

claimable amount observed

claim tx hash

swap quote summary

swap tx hash

USDC received

Locus API action taken

Locus payment amount(s)

email recipient and send status

final remaining balance

any failure condition

15.4 Optional Reasoning Log

If feasible, include concise reasoning strings such as:

balance below threshold

claim available and within cap

quote acceptable

proceeding with swap

proceeding with payment

sending receipt

16. Minimal UX Specification
16.1 Acceptable Formats

Either of the following is sufficient:

command-line driven demo script with structured console output

minimal React/Next.js page with buttons and live state display

16.2 Required Visible State

The demo interface must clearly display:

selected contract: production or demo harness

owner address

agent address

vault wstETH balance

principal baseline

current value

claimable amount

whitelist status

per-tx cap

recent tx hashes

final payment and email confirmation

16.3 Required User Actions

Must support:

deposit

configure whitelist and cap

execute demo-only delta injection on demo harness

run agent claim/swap/pay flow

display final state

17. Required Demo Sequence
17.1 Preparation

deploy both contracts on Base mainnet

configure same owner and agent

deposit real wstETH

configure recipient whitelist

configure per-tx cap

set up Locus wallet/API

set up Uniswap API credentials

17.2 Demo Order
Step 1 — Production Provenance

Show the production contract:

deployed on Base

no demo backdoor

principal tracked in value terms

permission controls visible

Step 2 — Demo Harness Setup

Show the demo harness:

same core interface

explicit demo-only function

used only for live operating-loop demonstration

Step 3 — Funding

Deposit real wstETH into demo harness.

Step 4 — Permission Controls

Show:

whitelisted recipient

per-tx cap

Step 5 — Failure Case

Attempt a claim that violates one of:

amount > cap

amount > claimable

recipient not whitelisted

Must revert visibly.

Step 6 — Demo Delta Initialization

Owner calls demo-only function to create spendable delta.

Step 7 — Agent Claim

Agent claims allowed spendable amount in wstETH.

Step 8 — Uniswap Swap

Agent swaps claimed wstETH to USDC on Base using Uniswap.
Show quote and tx hash.

Step 9 — Locus Payment

Agent pays for one wrapped API action through Locus.

Step 10 — Email Receipt

Agent sends email receipt through Locus-powered email flow.

Step 11 — Final State

Show:

principal remains protected

spendable amount reduced

payment completed

email received

18. Data and Configuration
18.1 Environment Variables

Required environment variables include:

Base RPC URL

owner private key or signer source

agent private key or signer source

wstETH token address on Base

USDC token address on Base

Uniswap API key

Locus API key

email recipient

wrapped API provider selection

slippage bps

per-tx cap

claim recipient address

18.2 Static Config

Maintain a config file containing:

contract addresses

token addresses

recipient whitelist defaults

demo amounts

payment thresholds

19. Security and Safety Requirements
19.1 Contract Safety

no upgradeability

no hidden owner withdrawal

clear role checks

no silent arithmetic assumptions

use checked math or Solidity 0.8 safe arithmetic

clear revert messages or custom errors

19.2 Agent Safety

abort on failed quote

abort on failed swap

abort on failed payment

do not overspend beyond claimed amount

do not rely on unconfirmed txs

19.3 Secret Handling

never commit private keys

never commit API keys

use environment variables

redact secrets from logs

20. Non-Goals and Exclusions

The development team must not spend time on:

generalizing beyond wstETH

staking directly from ETH

L1/L2 bridge tooling

analytics dashboard polish

complex governance layer

multi-agent orchestration

routing across multiple DEXes

multiple payment providers

SaaSization of the product

generalized plugin architecture

21. Deliverables
21.1 Contracts

RingfenceProduction.sol

RingfenceDemoHarness.sol

21.2 Agent Runtime

script or service implementing full claim → swap → pay → notify loop

21.3 Minimal UI or CLI

demo control surface and state display

21.4 Documentation

README

architecture diagram

setup instructions

contract addresses

tx hashes

explanation of production vs demo harness separation

21.5 Demo Assets

short recorded demo

written demo script

screenshot or screen capture of final receipt email

22. Acceptance Criteria

The build is complete only if all of the following are true:

Contracts

production contract deployed on Base mainnet

demo harness deployed on Base mainnet

production contract contains no demo backdoor

demo harness contains explicit demo-only function

claim permission controls enforced onchain

Claim and Swap

agent can read claimable amount

failing claim case demonstrated

successful claim case demonstrated

claimed wstETH swapped to USDC via Uniswap

live tx hash available

Locus

agent uses Locus for one wrapped API action

agent uses Locus to send one email receipt

live payment proof available

Narrative

principal protection clearly demonstrated

demo harness explicitly disclosed

no claim made that demo-only delta equals fresh real accrued yield

23. Canonical Positioning Language

Use the following product language consistently in docs and demo:

Ringfence is a yield-backed operating treasury for AI agents. It uses wstETH as the backing asset, protects principal at the contract level, allows only bounded spendable value to flow to the agent, converts that spendable value into USDC via Uniswap on Base, and executes real payments through Locus.

Do not use language that implies:

live same-day yield magically accrued in the demo harness

extra wstETH appeared through rebasing

the demo harness is the production primitive

24. Development Priorities
Priority 1

Production contract correctness and clarity

Priority 2

Demo harness usability and explicitness

Priority 3

Uniswap swap execution on Base

Priority 4

Locus payment and email receipt

Priority 5

Demo polish and docs

25. Final Product Definition

Ringfence is a two-layer agent treasury system:

the production layer proves the correct principal-protection primitive for a non-rebasing yield-bearing asset

the demo layer enables a live Base-mainnet end-to-end operating-loop demonstration with real swaps and real payments

The product is complete when the team can show, live, that an AI agent can operate economically using a bounded treasury backed by wstETH while remaining structurally incapable of touching the human’s principal.



Worked for 2h 1m 51s
Plan



Ringfence v1 Implementation Plan
Summary
Bootstrap a small two-part workspace: Foundry for contracts/deploy/tests, TypeScript CLI for runtime and demo control. Pin Node >=20 with nvm and repo metadata so the TS toolchain is reproducible on this machine.
Ship two Base-mainnet contracts with a shared interface: RingfenceProduction as the canonical primitive, and RingfenceDemoHarness as the same claim surface plus one explicit demo-only spendable-delta mechanism.
Ship one CLI that covers owner setup, state inspection, failure-case demonstration, and the live agent loop: read -> claim -> swap -> top up Locus wallet -> Firecrawl -> Resend -> final state.
Key Changes
Contracts
Define a compact IRingfence surface with the required reads/writes from the spec: owner, agent, principalBaseline, getCurrentPositionValue, getClaimableAmount, whitelist/cap getters, setAgent, deposit, setRecipientWhitelist, setPerTxCap, claim.
Omit cooldown in v1. The only onchain controls are the required ones: recipient whitelist and per-tx cap.
RingfenceProduction
Store principalBaseline in stETH-denominated value units, not raw wstETH units.
deposit(amount) pulls wstETH from the owner and increments baseline by wstETH.getStETHByWstETH(amount).
getCurrentPositionValue() returns wstETH.getStETHByWstETH(vaultWstETHBalance).
getClaimableAmount() computes deltaStETH = max(currentValue - principalBaseline, 0) and converts it to transferable wstETH with getWstETHByStETH(deltaStETH).
claim(amount, recipient) is agent-only and reverts unless recipient is whitelisted, amount <= perTxCap, and amount <= getClaimableAmount(). Claim transfers wstETH; baseline never decreases.
Use fixed owner, configurable single agent, explicit custom errors, and direct ERC20 transfer checks. No upgradeability, no withdrawal backdoor, no extra roles.
RingfenceDemoHarness
Reuse production behavior and state.
Add uint256 public demoSpendableDeltaStETH.
Add owner-only demoGrantSpendableDelta(uint256 deltaStETH) with comments that it is demo-only and not real accrued yield.
Override claimable calculation to use effectiveBaseline = max(principalBaseline - demoSpendableDeltaStETH, 0). All other claim controls remain identical to production.
Runtime and CLI
Use TypeScript CLI with viem, commander, and plain fetch.
Keep one binary with these commands:
state --contract production|demo
owner deposit|set-agent|whitelist|set-cap|demo-grant-delta
agent claim
agent run-loop
demo fail-claim
agent run-loop is fixed to this sequence:
Read contract state and getClaimableAmount().
Abort if zero or outside configured demo bounds.
Claim wstETH from the selected contract to the agent EOA.
Request an exact-input wstETH -> USDC quote on Base from Uniswap Trading API with configured slippage.
If Permit2 data is returned, sign it and include both signature and permitData. Support CLASSIC routing only in v1; abort loudly on any other route type.
Call /swap, validate returned transaction payload, broadcast via Base RPC, wait for confirmation, and measure exact USDC received.
Send the swapped USDC from the agent EOA to the configured Locus wallet address on Base and wait for confirmation.
Call Locus wrapped Firecrawl for one paid scrape.
Call Locus wrapped Resend for one paid receipt email.
Query final token balances plus Locus balance and print the final ledger.
Logging is step-based and dual-format: one readable console block plus one JSON record per step with step, status, amounts, txHash, and error.
Config and Docs
Keep one typed config layer for: Base RPC, owner key, agent key, token addresses, contract addresses, claim recipient, Locus wallet address, Uniswap API key, Locus API key, slippage bps, cap, demo delta, Firecrawl URL, email sender, email recipient.
Deployment is via Foundry scripts for both contracts; deployment output is written to a checked-in addresses/config artifact that the CLI consumes.
README and demo script must explicitly separate production vs demo harness, explain the value-based wstETH accounting model, and state that the demo delta is not real Lido yield.
Include one small architecture diagram and a live-demo checklist matching the accepted sequence.
Public Interfaces
Contract units are explicit:
principalBaseline() and getCurrentPositionValue() return stETH-value units with 18 decimals.
getClaimableAmount() and claim(amount, recipient) use wstETH token units.
Demo harness additionally exposes demoSpendableDeltaStETH().
CLI state output always shows: selected contract, owner, agent, vault wstETH balance, principal baseline, current value, claimable amount, whitelist status for the claim recipient, per-tx cap, recent tx hashes, Locus wallet address, and final Firecrawl/email status.
Test Plan
Foundry unit tests with a mock wstETH that exposes adjustable getStETHByWstETH and getWstETHByStETH ratios:
deposit updates baseline by value, not token count
production claimable stays zero when rate is unchanged
production claimable increases when the conversion rate increases
claim reverts for non-agent caller, non-whitelisted recipient, amount above cap, and amount above claimable
after a successful production claim, remaining position value is still >= principalBaseline
demo delta creates claimable amount without rate movement and without bypassing whitelist/cap checks
production does not expose the demo function; demo harness does
Base mainnet-fork tests:
state reads against live token addresses
demo-harness claim path
Uniswap quote validation and swap transaction simulation
agent-to-Locus USDC top-up transfer path
Runtime failure tests:
zero-claimable aborts before swap
swap failure aborts before Locus funding
Locus funding failure aborts before Firecrawl
Firecrawl failure aborts before email
email failure reports partial completion without claiming full success
Assumptions
Owner and agent are separate Base EOAs.
The agent EOA is the whitelisted claim recipient and the Uniswap signer.
The Locus wallet is a separate configured Base address and is funded from swapped USDC inside the live loop.
Uniswap integration follows the documented Trading API flow: /quote -> optional Permit2 signature -> /swap.
Locus integration uses production endpoints at https://api.paywithlocus.com/api, specifically wrapped Firecrawl, wrapped Resend, and balance reads.
References: Uniswap API Integration Guide, Uniswap API Overview, Locus Quick Start, Locus Provider Catalog, Locus USDC Transfers
A. Support both CLASSIC and UniswapX quote routing, or force quote params toward CLASSIC

Your current plan says “support CLASSIC routing only in v1; abort loudly on any other route type.”

That is acceptable only if you can reliably constrain quote generation so the API returns CLASSIC. Otherwise the demo is fragile. Either:

explicitly bias the request toward classic pool routing, or

support the documented branch:

CLASSIC / WRAP / UNWRAP / BRIDGE → /swap

DUTCH_V2 / DUTCH_V3 / PRIORITY → /order

For hackathon reliability, the best move is: target classic routing and fail early if quote routing differs. But make sure the request is shaped to prefer that path.

B. Add an approval step before first swap

Your runtime sequence needs an explicit:

/check_approval

if approval tx returned, sign and broadcast it

then /quote

Do not assume pre-existing Permit2 approval.

C. Do not call the Locus production API unless you truly have production credentials

Your assumptions say:

production endpoints at https://api.paywithlocus.com/api

That is only correct if you already have a production Locus account/wallet/API key and want to use it. For hackathon safety, I would default the code/config to beta unless you have already confirmed prod access and funding.

D. Verify Resend is actually enabled in the Locus account

Treat Firecrawl and Resend as configurable providers, not hardcoded assumptions. The CLI should check enabled provider availability before the paid phase.

E. Add a direct USDC transfer implementation detail

The runtime should explicitly use the Base USDC contract transfer from the agent EOA to the Locus wallet address after the swap, and then poll:

onchain agent USDC balance

onchain Locus wallet USDC balance

optionally Locus /pay/balance before proceeding

That should be a first-class step in the CLI output.

Minor contract notes

In production, after a successful claim, the remaining position value being >= principalBaseline is the critical invariant. Good.

In the demo harness, clamp effectiveBaseline and make the demo delta clearly observable in state output.

Add claimableBefore and claimableAfter assertions in tests around every successful claim.

Use custom errors consistently.

Minor CLI notes

Add these commands if easy:

agent approve-swap

agent swap

agent topup-locus

agent pay-firecrawl

agent send-receipt

Even if run-loop is the main demo command, having stepwise commands is extremely helpful during debugging and recording.



12 previous messages
Plan



Ringfence v1 Implementation Plan
Summary
Build a small repo with Foundry for contracts/tests/deploy and a TypeScript CLI for runtime/demo orchestration. Pin Node 20.x via .nvmrc and package.json engines.
Ship two Base-mainnet contracts with one shared interface: RingfenceProduction as the canonical primitive, and RingfenceDemoHarness as the same claim surface plus one explicit demo-only delta function.
Keep the swap path deterministic: use Uniswap Trading API with the documented check_approval -> quote -> swap flow, and constrain the quote to Classic pools only via protocols=["V2","V3","V4"]. If the API returns any non-Classic route anyway, abort.
Key Changes
Contracts
Define a compact shared interface for the required reads/writes: owner, agent, principalBaseline, getCurrentPositionValue, getClaimableAmount, whitelist/cap getters, setAgent, deposit, setRecipientWhitelist, setPerTxCap, claim.
Omit cooldown in v1. Onchain controls are only the required ones: recipient whitelist and per-tx cap.
RingfenceProduction
Store principalBaseline in stETH-value units.
deposit(amount) transfers wstETH from the owner and increments baseline by wstETH.getStETHByWstETH(amount).
getCurrentPositionValue() returns wstETH.getStETHByWstETH(vaultBalance).
getClaimableAmount() computes deltaStETH = max(currentValue - principalBaseline, 0) and converts that delta back to transferable wstETH with getWstETHByStETH(deltaStETH).
claim(amount, recipient) is agent-only and reverts unless recipient is whitelisted, amount <= perTxCap, and amount <= getClaimableAmount(). Claim transfers wstETH; baseline never decreases.
Use custom errors consistently. No upgradeability, no hidden withdrawal path, no extra roles.
RingfenceDemoHarness
Preserve the same public surface and claim checks.
Add uint256 public demoSpendableDeltaStETH.
Add owner-only demoGrantSpendableDelta(uint256 deltaStETH) with explicit comments that it is demo-only and not real accrued yield.
Compute effectiveBaseline = principalBaseline > demoSpendableDeltaStETH ? principalBaseline - demoSpendableDeltaStETH : 0.
Override claimable logic to use effectiveBaseline; all whitelist/cap/agent restrictions remain unchanged.
Surface demoSpendableDeltaStETH in CLI state output.
Runtime and CLI
Use TypeScript CLI with viem, commander, and fetch.
Keep one binary with these commands:
state --contract production|demo
owner deposit|set-agent|whitelist|set-cap|demo-grant-delta
demo fail-claim
agent claim
agent approve-swap
agent swap
agent topup-locus
agent pay-firecrawl
agent send-receipt
agent run-loop
agent run-loop is fixed to this sequence:
Read selected contract state and getClaimableAmount().
Abort if claimable is zero or outside configured demo bounds.
Claim wstETH from the selected contract to the agent EOA.
Call Uniswap POST /check_approval with the documented approval payload for the agent wallet and claimed amount. If an approval transaction is returned, broadcast it and wait for confirmation.
Call Uniswap POST /quote with exact-input wstETH -> USDC, Base chain IDs, configured slippage, generatePermitAsTransaction=false, and protocols=["V2","V3","V4"].
Require routing === "CLASSIC". If the API returns DUTCH_V2, DUTCH_V3, PRIORITY, WRAP, UNWRAP, or BRIDGE, abort loudly. v1 intentionally does not use /order.
If permitData is present, sign the EIP-712 payload and send both signature and permitData to POST /swap. If permitData is null, omit both fields.
Validate the returned swap transaction: to, from, non-empty data, sane gas fields, and local pre-broadcast simulation via RPC.
Broadcast the swap transaction, wait for confirmation, and measure exact USDC received.
Transfer USDC on Base from the agent EOA to the configured Locus wallet address using the Base USDC transfer.
Poll and log both onchain balances: agent USDC and Locus wallet USDC. Then call Locus /pay/balance and require a sufficient funded balance before paid API use.
Query Locus wrapped catalog and require both firecrawl/scrape and resend/send-email to be enabled before the paid phase.
Call Locus wrapped Firecrawl for one paid scrape.
Call Locus wrapped Resend for one receipt email.
Print final ledger with claim, swap, USDC transfer, Firecrawl spend, Resend spend, remaining balances, and principal-protection confirmation.
Uniswap Integration Details
Hardcode the v1 route strategy to Classic-only because the API supports execution-path whitelisting through protocols, and this yields a deterministic gasful swap with an immediate Base tx hash.
Do not implement /order in v1. This is a deliberate simplification, not an omission.
Enforce quote freshness: if more than 30 seconds pass between quote receipt and broadcast, fetch a fresh quote.
Use clear slippage handling with a repo config value in bps, converted to the API field expected by the client wrapper.
Log Uniswap request IDs, quote summary, price impact if available, swap tx hash, and exact USDC delta.
Locus Integration Details
Make Locus environment selectable with LOCUS_ENV=beta|prod; default to beta.
Default LOCUS_API_BASE to https://beta-api.paywithlocus.com/api. Production is opt-in only when funded production credentials exist.
Treat Firecrawl and Resend as required configured providers, not blind assumptions. Provider availability is checked before paid execution.
If a Locus wrapped call returns approval-required status, print the approval URL and stop the automated loop there instead of claiming success.
Receipt email content includes:
claimed wstETH
USDC received from swap
USDC transferred to Locus wallet
Firecrawl spend
email spend
remaining spendable amount
statement that principal remains protected
Config and Docs
Maintain typed config for: Base RPC, owner key, agent key, token addresses, contract addresses, claim recipient, Locus wallet address, Locus env/base/API key, Uniswap API key, slippage bps, cap, demo delta, Firecrawl URL, sender email, recipient email.
Deployment is via Foundry scripts for both contracts. Deployment output writes to a checked-in addresses/config artifact that the CLI consumes.
README and demo script explicitly separate production vs demo harness, explain the value-based wstETH accounting model, and state that the demo delta is not real Lido yield.
Include one small architecture diagram and a live-demo checklist matching the exact CLI flow.
Public Interfaces
Contract units are explicit:
principalBaseline() and getCurrentPositionValue() return stETH-value units with 18 decimals.
getClaimableAmount() and claim(amount, recipient) use wstETH units.
Demo harness additionally exposes demoSpendableDeltaStETH().
CLI state output always shows: selected contract, owner, agent, vault wstETH balance, principal baseline, current value, demo delta if present, claimable amount, whitelist status for the configured recipient, per-tx cap, recent tx hashes, agent USDC, Locus wallet USDC, Locus balance check result, and Firecrawl/Resend availability.
Test Plan
Foundry unit tests with a mock wstETH exposing adjustable getStETHByWstETH and getWstETHByStETH ratios:
deposit updates baseline by value, not token count
production claimable is zero when rate is unchanged
production claimable increases when the conversion rate increases
claim reverts for non-agent caller, non-whitelisted recipient, amount above cap, and amount above claimable
every successful claim asserts claimableBefore, claimableAfter, transferred amount, and remaining position value >= principalBaseline
demo delta creates claimable without rate movement and remains visible in state
production has no demo function; demo harness does
Base mainnet-fork tests:
live token-address reads
demo-harness claim path
Uniswap check_approval handling
Classic-only quote request shape
swap transaction validation and simulation
direct USDC transfer to the Locus wallet
Runtime failure tests:
zero-claimable aborts before approval
approval failure aborts before quote
non-Classic quote aborts before swap
stale quote triggers refresh
swap failure aborts before Locus transfer
Locus transfer failure aborts before Firecrawl
missing or disabled Firecrawl/Resend aborts before paid calls
Firecrawl failure aborts before email
email failure reports partial completion without claiming full success
Assumptions
Owner and agent are separate Base EOAs.
The agent EOA is the claim recipient and Uniswap signer.
The Uniswap runtime is intentionally Classic-only by request shaping; any other routing result is treated as a hard failure.
The Locus wallet is a separate configured Base address funded from swapped USDC during the live loop.
Locus defaults to beta and can be switched to production only when funded production credentials are available.
Firecrawl and Resend are required providers, but the runtime verifies they are enabled before attempting the paid phase.
References
Uniswap Trading API integration guide
Uniswap quote endpoint
Locus Quick Start
Locus Quick Start (Beta)
Locus Agent Integration
Locus Provider Catalog
Implement plan


Worked for 48m 7s
Implemented the Ringfence repo and validated the local build/test path.

Implemented

Contracts: RingfenceProduction.sol, RingfenceDemoHarness.sol
Deploy script: DeployRingfence.s.sol
Solidity tests: Ringfence.t.sol, RingfenceFork.t.sol
TS CLI/runtime: index.ts, runtime.ts, uniswap.ts, locus.ts
Config/docs: README.md, defaults.json, deployments.json, demo-script.md
Validation

forge test: passed 12/12
pnpm run check: passed
pnpm run test: passed
node --import tsx src/index.ts --help: passed
Notes

Node is pinned with .nvmrc; I used nvm with Node 20.19.4.
The CLI is wired for the full claim -> approval -> quote -> swap -> topup -> Firecrawl -> Resend loop, but I did not execute live Base/Uniswap/Locus transactions because the repo still needs real addresses/keys in .env and deployment output in deployments.json.
config/defaults.json is intentionally placeholder-heavy for chain-specific values you have not supplied yet.
Next Steps

Fill .env with Base RPC, owner/agent keys, token addresses, Uniswap key, Locus key, Locus wallet, email fields.
Deploy with forge script and update deployments.json.
Run the owner setup commands, then execute pnpm run cli -- agent run-loop --contract demo.

9 files changed
+73
-61
Undo
README.md
package.json
src/chain.ts
src/contracts.ts
src/format.ts
src/index.ts
src/runtime.ts
src/uniswap.ts
test/Ringfence.t.sol
I added documentation for locus, lido, and the hackathon we're competing in to the 'integration-docs' folder, in case you need it. I also have these requests for changes:

This is in very good shape. The production/demo split, TS CLI, and live loop are coherent. I’d move forward, but I would fix these before live Base execution.

## High-priority fixes

### 1. Poll Locus balance after the top-up before calling Firecrawl

Right now runAgentTopupLocusStep() transfers USDC to the configured Locus wallet and immediately reads /pay/balance, then runLoop() proceeds straight into Firecrawl and Resend. There is no retry window if Locus balance indexing lags the onchain transfer. That makes the first live run fragile.  

**What to change**

* After the USDC transfer confirms, poll getLocusBalance() until:

  * the reported balance increases by at least the transferred amount, or
  * a timeout is reached
* Only then proceed to Firecrawl

### 2. Verify the configured LOCUS_WALLET_ADDRESS matches the wallet behind the API key

You are separately configuring a Locus wallet address for the onchain top-up, while the Locus API key points to whatever wallet its account is bound to. The code never checks those are the same wallet. getLocusBalance() returns wallet_address, but you don’t compare it to config.locusWalletAddress.  

**What to change**

* On startup, fetch getLocusBalance()
* Compare data.wallet_address to LOCUS_WALLET_ADDRESS
* Hard fail if they differ

### 3. Make the demo delta explicitly resettable

demoGrantSpendableDelta() only accumulates. After a full claim, claimable goes to zero, but the stored delta remains and continues to affect future effective baseline calculations. That is acceptable if intentional, but for repeatable demos you probably want an explicit reset or set function. 

**What to change**

* Add one of:

  * demoSetSpendableDelta(uint256)
  * demoResetSpendableDelta()
* Keep the current function if you want additive behavior, but add reset for operational sanity

### 4. Fix the README absolute local path

The README includes an absolute local filesystem path in the architecture link:
x
That will look sloppy in a public repo and may break on other machines. 

**What to change**

* Replace with a relative repo path like docs/architecture.md

---

## Medium-priority fixes

### 5. Add one explicit readiness check for required Locus config

sendReceiptEmail() depends on emailFrom and emailTo, but there’s no up-front validation that those are present before the run loop starts. You will only fail deep into execution.  

**What to change**

* Validate at startup:

  * LOCUS_API_KEY
  * LOCUS_WALLET_ADDRESS
  * EMAIL_FROM
  * EMAIL_TO

### 6. Persist the request IDs and approval URLs from Locus pending-approval flows

You already surface pending approval URLs for Firecrawl and email, which is good, but you only return them transiently. For demo resilience, write them into runtime state the same way you store tx hashes.  

### 7. Add a preflight command

You have the right primitives already. A dedicated preflight command would save you pain before live demo:

* state check
* Uniswap approval readiness
* Locus wallet/API key address match
* wrapped API availability
* email config presence

You already have most of the pieces in showState() and the guard helpers.   

---

## Contract review

The production contract design is sound for the intended primitive:

* deposit increases principal baseline by getStETHByWstETH(amount) rather than raw token count 
* claimable amount is derived from current position value over baseline, converted back into transferable wstETH units 
* claim is agent-only and gated by recipient whitelist and per-tx cap 
* your tests cover unchanged-rate zero claimability, rate-increase claimability, authorization failures, and the post-claim invariant that remaining value stays at or above baseline 

I would ship this contract pair.

---

## Runtime review

The CLI structure is good:

* state
* owner setup commands
* stepwise agent commands
* run-loop orchestration 

The runtime sequencing is also right:

* claim
* approval
* quote/build/broadcast swap
* top up Locus
* Firecrawl
* Resend 

The main live risk is not architecture. It’s synchronization between:

* onchain USDC transfer confirmation
* Locus balance reflection

Fix that and you’re in strong shape.



Worked for 7m 30s
Implemented the requested fixes.

Locus startup is now strict: the run loop and preflight hard-fail unless UNISWAP_API_KEY, LOCUS_API_KEY, LOCUS_WALLET_ADDRESS, EMAIL_FROM, and EMAIL_TO are present, and /pay/balance must report the same wallet as LOCUS_WALLET_ADDRESS. See runtime.ts (line 78) and runtime.ts (line 129).
Top-up now waits for Locus indexing before proceeding: after the onchain USDC transfer confirms, the runtime polls /pay/balance until the reported balance increases by the transferred amount or times out. See runtime.ts (line 154) and runtime.ts (line 395).
Pending approval state is persisted and surfaced: pending_approval_id and approval_url are written into runtime state and shown in state. See history.ts (line 38), types.ts (line 36), and runtime.ts (line 181).
Added preflight and demo reset CLI paths. See index.ts (line 69) and index.ts (line 122).
The demo harness now has an explicit reset path for repeatable demos: demoResetSpendableDelta(). Production still does not expose demo-only entrypoints. See RingfenceDemoHarness.sol (line 21) and Ringfence.t.sol (line 155).
The README path is now repo-relative and documents preflight plus the demo reset command. See README.md (line 29).
Validation:

forge test
pnpm run check
pnpm run test
node --import tsx src/index.ts --help
The Locus wallet-address check and pending-approval handling were aligned to the docs you added under integration-docs/.

Next steps:

Run pnpm run cli -- preflight --contract demo
Reset/regrant demo delta as needed, then run the live loop on Base

10 files changed
+345
-29
Undo
README.md
contracts/RingfenceDemoHarness.sol
src/abis.ts
src/contracts.ts
src/history.ts
src/index.ts
src/locus.ts
src/runtime.ts
src/types.ts
test/Ringfence.t.sol
Ok, fantastic. I noticed there were no events in the contracts, so I added some. I'll grab the API keys. We also need to think about how we can take this from internal demo to something 'live' that other users can interact with. the simplest path is just a dashboard that registers our agent is active, is doing 'work' with the yield generated. more fruitful, I think, is allowing users to use the agent to... deposit some wSTETH in the demo contract (or the real one if they're willing to wait/deposit the funds necessary for sufficient yield to generate), trigger their own payments and receive an email.... this is speculative but based on what I read in all the various files from the hackathon team, they emphasize that the demo should be 'live' during judging (~3 days) so there's something for them to see/interact with. 


The right cut is:

Ship a public judge-facing dashboard now.
Do not turn the current vault into a shared public deposit pool.
The current contracts are a single-owner, single-agent primitive with one global principal baseline. That is correct for Ringfence v1. It is not the right architecture for arbitrary users depositing into one shared contract.

Recommendation
Build a live, public, operator-funded demo surface for the judging window.

What that should do:

show production and demo vault state live
show recent onchain events and recent agent runs
show whether the agent is active, idle, or blocked on approval
let a visitor submit:
a URL to scrape
an email address for the receipt
run the existing demo-harness flow with your funded demo budget
send them the real receipt email
show the tx hashes and result on the page
That gives judges something real to click, without changing the custody model.

Why This Is Better

It preserves the current contract design.
It keeps keys and Locus credentials server-side.
It makes the system visibly live for 3 days.
It creates a clean story: bounded demo treasury, real swap, real payment, real email.
What Not To Do
Do not let multiple users deposit into the existing demo or production contract as-is.
Problems:

deposit is owner-controlled
baseline accounting is global
whitelist/cap are global
one user’s actions would affect another user’s treasury state
That becomes a multi-tenant treasury system, which is a different product.

If You Want Real User Deposits
That should be v2, and it should be per-user isolated.

Minimal correct model:

each user gets their own RingfenceProduction or RingfenceDemoHarness
user is the owner
your agent is the agent
whitelist/cap are configured per vault
deposits and principal baseline stay isolated per user
That is the right architecture if you want “bring your own wstETH”.

Practical Build Plan
For the next step, I would implement:

A minimal Next.js dashboard
Read-only live state for both contracts
Activity feed from contract events plus runtime state
A Run Demo Job form: url, email
A server-side queue/worker that invokes the existing runtime
One-job-at-a-time and simple rate limits
Admin controls for:
preflight
demoGrantSpendableDelta
demoResetSpendableDelta
run-loop trigger
UI Scope
Keep it tight:

vault balances
principal baseline
current value
claimable amount
demo delta
recent tx hashes
recent Firecrawl/email outcomes
current agent status
request form
Use The Events You Added
Those events are exactly what the dashboard needs for the onchain side.
For the offchain side, keep using runtime state/logs for:

swap quote
swap tx
Locus top-up
Firecrawl result
email result
pending approvals
My Recommendation
Build the live dashboard + public request flow now.
Do not spend time on shared public deposits.
If there is time after that, build per-user isolated vault deployment.

If you want, I can implement the dashboard and request-run backend next.


okay, little revision here. I was thinking about it. our agent should query/scrape/check for updates on the lido governance forum, to monitor the position.. there's a meta element here, where the agent is essentially supervising itself while keeping itself alive based on the generated yield. locus offers a service called 'diffbot' which I think is better suited than firecrawl.  we can pass it to google gemini (using 'gemini-3-flash-preview') for summarization. we want to know what's been discussed recently, holistically, but with a particular emphasis on security concerns, hacks, slashings, or serious governance concerns. 

Diffbot logo
Diffbot
API Docs →
diffbot.com →
3 utility APIs — web scraping, ai / nlp, data / intelligence.


diffbot/article
GET
Article

$0.004

diffbot/product
GET
Product

$0.004

diffbot/discussion
GET
Discussion

$0.004
Extract threaded comments, reviews, and forum posts with authors, dates, and sentiment.

Param	Type	In	Required	Description
url	string	body	Yes	URL of the discussion page
fields	string	body	No	Comma-separated extra fields to return (e.g. links, meta, breadcrumb)
timeout	number	body	No	Request timeout in ms (default 30000)
discussion	boolean	body	No	Extract comments/discussion threads (default true for article)
paging	boolean	body	No	Follow pagination links
maxPages	number	body	No	Max pages to follow (default 20)
curl -X POST /api/wrapped/diffbot/discussion \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "url": "<string>"
}'

diffbot/image
GET
Image

$0.004

diffbot/video
GET
Video

$0.004

diffbot/analyze
GET
Analyze

$0.004

diffbot/event
GET
Event

$0.004

diffbot/list
GET
List

$0.004

diffbot/job
GET
Job Posting

$0.004

diffbot-nl/analyze
POST
Analyze Text

$0.004+ (per 10k chars)
Perform NER, sentiment analysis, fact extraction, and summarization on text.

Param	Type	In	Required	Description
content	object[] | string	body	Yes	Array of document objects with { content, lang?, format? } or a single text string
fields	string	body	No	Comma-separated NLP fields: entities, sentiment, facts, categories, sentences, summary, language
curl -X POST /api/wrapped/diffbot-nl/analyze \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "content": "<object[] | string>"
}'

diffbot-kg/search
GET
Search (DQL)

$0.03–$1.50 (25 credits/entity)

diffbot-kg/enhance
GET
Enhance

$0.03 ($0.12 with refresh)


///


Google Gemini logo
Google Gemini
API Docs →
ai.google.dev →
Multimodal AI — chat, vision, PDF/document processing, thinking/reasoning, and embeddings.


gemini/chat
POST
Chat

Model-dependent (~$0.003–$0.15)
Multimodal text generation — chat, vision (images), PDF/document processing, thinking/reasoning, and structured output. Supports all Gemini models.

Param	Type	In	Required	Description
model	string	body	Yes	Gemini model ID (e.g. 'gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash', 'gemini-2.5-flash-lite', 'gemini-3-flash-preview', 'gemini-3.1-pro-preview')
messages	array	body	Yes	Conversation messages. Each: { role: "user"|"model", content: "text" } or { role, parts: [{ text }, { inlineData: { mimeType, data } }] } for multimodal (images, PDFs)
systemInstruction	string	body	No	System instruction / system prompt
maxOutputTokens	number	body	No	Maximum output tokens (default 8192, max 65536)
temperature	number	body	No	Sampling temperature (0.0–2.0, default 1.0)
topP	number	body	No	Nucleus sampling threshold
topK	number	body	No	Top-K sampling (default 64)
thinking	string | boolean | number	body	No	Enable thinking/reasoning. true for dynamic thinking, a number for exact token budget (2.5 models), or a level: 'minimal', 'low', 'medium', 'high'. Levels map to token budgets on 2.5 models and thinkingLevel on 3.x models.
responseMimeType	string	body	No	Response format: 'text/plain' (default) or 'application/json' for structured output
responseJsonSchema	object	body	No	JSON Schema for structured output (requires responseMimeType: application/json)
stopSequences	string[]	body	No	Stop sequences to end generation
curl -X POST /api/wrapped/gemini/chat \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "model": "<string>",
  "messages": "<array>"
}'



I’m grounding this in the current repo first: how the runtime is wired today, what still assumes Firecrawl, and whether there’s already any UI surface to reuse. After that I’ll lock the product shape for the governance-monitor variant.

Explored 3 files, 1 search, 3 lists
I’ve confirmed the current repo is still the original Firecrawl receipt loop with no UI. I’m reading the local hackathon/Locus docs now for the exact Diffbot/Gemini fit and the judging-window expectations so the next plan matches that framing, not a generic dashboard.

Explored 2 files, 1 search
I’ve grounded the current shape: today it is still a one-shot claim -> swap -> Locus top-up -> Firecrawl -> Resend CLI with no dashboard, while the local hackathon docs explicitly value plain-language monitoring/alerts over a passive dashboard. Three product decisions still materially change the plan, so I’m locking those now.


Asked 3 questions
Searched web for https://research.lido.fi/
Searched web for site:research.lido.fi latest.json research lido discourse
The core direction is clear now: public dashboard, autonomous hourly monitoring, and Diffbot/Gemini replacing Firecrawl as the main narrative. Two remaining choices still affect the design materially: how broad the forum scan should be, and whether emails are operator-only or user-subscribeable.


Asked 2 questions
One more design seam matters before the plan is implementable: if the agent runs every hour, the treasury flow should almost certainly be decoupled from the monitoring cadence, and the notification policy needs to avoid spam. I’m locking those choices next.


Asked 2 questions
The product spec is stable now. I’m doing one final repo pass on config/types and package shape so the plan is implementation-ready rather than hand-wavy.


sorry, I answered when the agent should send emails incorrectly. send two - daily digest and material changes requiring a user alert. 

. Hourly loop (agent always runs)

Every hour:

Diffbot → scrape governance forum
Gemini → summarize + compare to last state
Classify result:
type ChangeLevel =
  | "NONE"
  | "MINOR"
  | "MATERIAL"
2. Email logic
A. MATERIAL → send immediately ✅ (primary path)

Trigger email when:

new proposal created
meaningful update to active proposal
high-engagement discussion spike
parameter / economic change mentioned

This is your hero behavior.

B. MINOR / NONE → do NOT spam

Instead:

store result
update public log
do nothing
C. Daily digest (fallback liveness anchor)

Once per day (e.g. 18:00 UTC):

send summary email:
recap of whateve changes occured

add a notification to the front-end when the email is sent out, inluding the content of the summary



2 previous messages
Plan



Ringfence Governance Monitor Plan
Summary
Turn Ringfence from a one-shot Firecrawl demo into a live, public governance-monitoring system that stays funded by yield and supervises the Lido position it depends on.

The live product will be:

a public dashboard showing agent health, treasury state, recent governance changes, digest/alert history, and recent onchain/runtime activity
an hourly autonomous monitor that scans the Lido governance forum, analyzes changed discussions, and updates the dashboard every run
immediate operator email alerts for MATERIAL changes
a daily digest email at 18:00 UTC summarizing all changes since the prior digest
a threshold-based treasury refill flow that only claims/swaps/tops up when the Locus balance is low
Use the demo harness by default for the live judging window. Show production contract state on the dashboard as the canonical primitive, but do not fund hourly monitoring from production unless explicitly configured.

Key Changes
Product Flow
Replace Firecrawl as the primary narrative with:

Discover recent Lido governance activity from the public forum
Determine what is new or materially updated since the last run
If nothing changed, record a NONE heartbeat and stop
If topics changed:
Diffbot discussion via Locus scrapes the changed thread pages
Gemini gemini-3-flash-preview via Locus summarizes and classifies each changed topic
Overall run severity is derived deterministically:
MATERIAL if any topic is MATERIAL
MINOR if at least one topic is MINOR and none are MATERIAL
NONE if no topics changed
Update the public dashboard/state log every run
Send emails:
immediate alert for MATERIAL
no email for MINOR or NONE
daily digest at 18:00 UTC covering all changes since the last digest
Discovery and Analysis
Use a two-stage monitor to keep spend bounded and behavior legible.

Discovery:

Source: https://research.lido.fi/latest.json
Paginate the latest feed up to a small fixed max page count, default 3
Track the whole recent forum, not curated categories only
First run uses a rolling 72h lookback
After first success, compare against stored topic snapshots instead of reprocessing all recent threads
A topic counts as changed when it is new or its last_posted_at or highest post count increased since last seen
Analysis:

Only changed topics go to Diffbot/Gemini
Cap changed topics analyzed per hourly run, default 5, ordered by most recent activity
If more topics changed than the cap, store an overflow count and show it on the dashboard/digest
Diffbot call:
endpoint: diffbot/discussion
input: forum thread URL
default params: paging=true, maxPages=3, fields=links,meta, timeout=30000
Gemini call:
endpoint: gemini/chat
model: gemini-3-flash-preview
response format: structured JSON
thinking: low
temperature: low/deterministic
prompt emphasis: security concerns, hacks, slashings, validator/operator issues, governance/process risk, parameter/economic changes, proposal creation, and high-engagement spikes
Gemini structured output per topic:

topicId
title
url
summary
changeLevel: MINOR | MATERIAL
riskTags: short array such as ["slashing","governance","oracle","operator"]
whyItMatters
recommendedAction: monitor | review | urgent_review
Treasury and Payments
Keep the current Base mainnet economic loop, but make it buffer-driven instead of run-driven.

Funding policy:

The monitor runs every hour regardless
Before any paid Locus step, check /pay/balance
If Locus pay balance is below LOCUS_BUFFER_MIN_USDC, run one refill:
read claimable
claim bounded wstETH
Uniswap approval/quote/swap to USDC
transfer USDC to the configured Locus wallet
wait for Locus balance reflection before continuing
Refill uses the existing exact-input swap path and a dedicated monitoring claim size, not “swap every run”
No refill loops: one refill attempt per hourly run; if balance is still below minimum after refill, mark the run degraded/failed and surface it on the dashboard
New default config values:

MONITOR_CONTRACT_KIND=demo
MONITOR_LOOKBACK_HOURS=72
MONITOR_MAX_TOPICS_PER_RUN=5
MONITOR_DISCOVERY_MAX_PAGES=3
LOCUS_BUFFER_MIN_USDC=2
MONITOR_REFILL_CLAIM_WSTETH as an explicit exact-input refill amount
DIGEST_HOUR_UTC=18
Required Locus endpoints become:

diffbot/discussion
gemini/chat
resend/send-email
Firecrawl is removed from the primary path, config, preflight, docs, and public CLI surface.

Dashboard and Runtime Surface
Do not add a heavy framework. Build a single long-running Node service in this repo that serves:

a public read-only dashboard page
protected admin endpoints/pages for manual rerun and digest send
the scheduler loop
the existing runtime library
Why this shape:

the repo already has a TS runtime and file-backed state
long-running scheduling and persistent local state are simpler and more reliable on one stateful service than serverless
secrets remain server-side
Public dashboard shows:

production and demo contract state
which contract funds monitoring
agent status: healthy | degraded | pending_approval | failed
last hourly run time and result
last daily digest time
current Locus balance
latest overall summary
recent changed topics with severity/risk tags
recent material alerts and daily digests, including digest content
recent tx hashes and pending approval URLs
recent contract events from the contracts you already instrumented
Admin surface:

manual hourly rerun
manual daily digest send
manual treasury preflight/refill
protected by a simple DASHBOARD_ADMIN_TOKEN
public dashboard remains read-only
CLI and Runtime Interfaces
Add a new top-level monitor command group and de-emphasize the old Firecrawl path.

New CLI:

monitor hourly --contract production|demo
monitor digest --contract production|demo
monitor preflight --contract production|demo
monitor serve
Keep:

owner contract config commands
low-level treasury debugging commands (claim, approve-swap, swap, topup-locus)
state
Remove from public surface:

agent pay-firecrawl
Firecrawl-specific docs/config/readiness checks
Runtime state must expand from tx history only into a monitor ledger containing:

topic snapshot cache keyed by topic ID/URL
hourly run history with NONE | MINOR | MATERIAL | FAILED | PENDING_APPROVAL
material alert history
daily digest history with full sent content
latest public summary
last digest sent timestamp
pending approvals
existing tx history
Public Interfaces and Types
Config additions:

forum discovery URLs and limits
monitoring refill amount and Locus minimum balance threshold
digest hour
dashboard admin token
Gemini model ID defaulting to gemini-3-flash-preview
Type additions:

ChangeLevel = "NONE" | "MINOR" | "MATERIAL"
MonitoredTopicSnapshot
MonitoredTopicResult
MonitorRunRecord
DigestRecord
expanded RuntimeStateFile.monitor
HTTP/API additions for the dashboard service:

GET /api/public/state
GET /api/public/runs
GET /api/public/digests
POST /api/admin/monitor/hourly
POST /api/admin/monitor/digest
POST /api/admin/monitor/preflight
Email outputs:

Immediate material alert email:
material topic summaries only
why it matters
recommended action
current treasury/protection summary
Daily digest email:
all MINOR and MATERIAL changes since prior digest
“no notable changes” section only if the period was quiet
digest body also stored and shown on the dashboard
Deduplication rule:

Immediate material emails are sent only when a topic becomes newly material or has new forum activity since its last material alert
No repeated hourly alerts for unchanged material topics
Test Plan
Contracts:

no new onchain behavior required beyond the events you already added
retain current contract tests and event assertions if applicable
Runtime/unit tests:

discovery returns NONE and skips Locus paid calls when no topics changed
changed topics are capped and overflow is logged
Diffbot result is normalized into Gemini input correctly
Gemini structured JSON parse validates required fields and rejects malformed output
overall change level is derived correctly from per-topic classifications
material alert dedup works across repeated hourly runs
daily digest includes all changes since the prior digest and resets the digest window
treasury buffer check skips refill when Locus balance is sufficient
treasury refill executes once when below threshold and aborts cleanly if still underfunded
pending approval from Diffbot, Gemini, or Resend is persisted and shown as blocked state
dashboard public endpoints expose the latest run, digest, tx, and approval data
admin endpoints reject missing/invalid admin token
Integration/fork tests:

Base fork treasury path still works with claim -> approval -> quote -> swap -> top-up
Locus provider readiness checks now require diffbot/discussion, gemini/chat, and resend/send-email
operator email send path works for both material alerts and daily digests
Manual acceptance:

public dashboard updates after an hourly run
a seeded material forum change produces an immediate email and dashboard alert card
MINOR change updates the dashboard but sends no immediate email
daily digest arrives at 18:00 UTC and appears on the dashboard with full content
low-balance hourly run visibly refills from the demo harness before paid monitoring continues
Assumptions and Defaults
Monitoring uses the demo harness by default during judging; production remains visible but is not the default funding source
Emails go to the operator only; there is no public subscription flow in v1
The service is deployed as one stateful Node process, not serverless
Forum discovery uses the public Discourse JSON feed for free; Locus-paid calls begin at Diffbot/Gemini/email
Daily digest time defaults to 18:00 UTC
Firecrawl is removed from the main product narrative rather than supported in parallel


[3/22/26 6:04 PM] z: awesome. we're wrapping up the implementation for the hackathon. I think you're going to love what we're putting together. when we're ready I'll need your help to complete the submission. you know what we need to do for that?
[3/22/26 6:04 PM] hoo: I’m going to check the hackathon API doc for the exact submission requirements so I can give you the concrete list, not guesses.
[3/22/26 6:04 PM] hoo: Found the actual submission guide reference. I’m pulling the relevant part.
[3/22/26 6:04 PM] hoo: I’ve got the concrete submission requirements now. Yeah. Broadly, yes — and I checked the actual submission guide so this is the concrete version, not me freewheeling.

What we’ll need for submission:

• your registered participant identity — done
• your team — also effectively done unless you changed it
• self-custody transfer completed for all team members before publishing
• at least one track UUID
• a project draft
• then a published project

For the project itself, the required fields are:

• team UUID
• name
• description
• problem statement
• repo URL
• track UUIDs
• conversation log
• submission metadata

And likely/strongly recommended extras:

• deployed URL
• video/demo URL
• pictures
• cover image URL

The submission metadata is important. It needs things like:

• agent framework
• agent harness
• model
• skills actually used
• tools actually used
• helpful resources/docs actually consulted
• optional “helpful skills” notes
• intention after hackathon:
• continuing
• exploring
• one-time

A couple practical implications for us:

1. We need the repo public and clean enough that it looks real.
2. We need a conversation log that honestly reflects the human-agent collaboration.
3. We need to choose tracks carefully from the catalog.
4. We need to do the self-custody step before final publish, not at the last second if it’s finicky.
5. Only the team admin can publish.

So your remaining work is roughly:

• finish deploy
• clean/publish repo
• write README + architecture + setup notes
• record demo
• choose tracks
• assemble submission copy
• create draft project
• do self-custody if not done
• publish

That’s very manageable if the code is mostly there.

When you wake up, I can help with any of these in sequence:

• make a submission checklist
• draft the project description/problem statement
• turn our work into a usable conversation log
• pick tracks
• prepare the submission payload
• sanity-check the repo/demo/docs against what judges will look for

Source: https://synthesis.md/submission/skill.md
[3/22/26 6:04 PM] hoo: Yeah. Broadly, yes — and I checked the actual submission guide so this is the concrete version, not me freewheeling.

What we’ll need for submission:

• your registered participant identity — done
• your team — also effectively done unless you changed it
• self-custody transfer completed for all team members before publishing
• at least one track UUID
• a project draft
• then a published project

For the project itself, the required fields are:

• team UUID
• name
• description
• problem statement
• repo URL
• track UUIDs
• conversation log
• submission metadata

And likely/strongly recommended extras:

• deployed URL
• video/demo URL
• pictures
• cover image URL

The submission metadata is important. It needs things like:

• agent framework
• agent harness
• model
• skills actually used
• tools actually used
• helpful resources/docs actually consulted
• optional “helpful skills” notes
• intention after hackathon:
• continuing
• exploring
• one-time

A couple practical implications for us:

1. We need the repo public and clean enough that it looks real.
2. We need a conversation log that honestly reflects the human-agent collaboration.
3. We need to choose tracks carefully from the catalog.
4. We need to do the self-custody step before final publish, not at the last second if it’s finicky.
5. Only the team admin can publish.

So your remaining work is roughly:

• finish deploy
• clean/publish repo
• write README + architecture + setup notes
• record demo
• choose tracks
• assemble submission copy
• create draft project
• do self-custody if not done
• publish

That’s very manageable if the code is mostly there.

When you wake up, I can help with any of these in sequence:

• make a submission checklist
• draft the project description/problem statement
• turn our work into a usable conversation log
• pick tracks
• prepare the submission payload
• sanity-check the repo/demo/docs against what judges will look for

Source: https://synthesis.md/submission/skill.md
[3/22/26 6:05 PM] z: how do we do the self-custody part?
[3/22/26 6:05 PM] hoo: I’m checking the submission guide for the exact self-custody flow.
[3/22/26 6:05 PM] hoo: I found the exact transfer step. Pretty simple, actually.

What it is

• Right now the agent starts in custodial mode.
• Before publishing, you need to transfer the agent’s onchain NFT to your own wallet address.
• No signing flow, no private key sharing — just a target wallet address, then a two-step confirm.

The flow

1. Pick the wallet address you want to own the agent NFT.
2. Call:

• POST /participants/me/transfer/init
with:
• targetOwnerAddress: "0x..."

3. The API returns:

• a transferToken
• the echoed targetOwnerAddress
• a message saying you must confirm within 15 minutes

4. Verify the address carefully.
5. Call:

• POST /participants/me/transfer/confirm
with:
• transferToken
• targetOwnerAddress

6. After that, your participant should show:

• custodyType: "self_custody"

Then you’re eligible to publish — assuming all team members have also done this.

Important details:

• the transfer token is single-use
• it expires after 15 minutes
• transfer is basically one-time
• only the team admin can publish
• publishing is blocked if any team member has not completed self-custody

So operationally, when you’re ready, I’ll just need:

• the wallet address you want to use

Then I can perform the transfer flow for you.

If you want, when you wake up, I can do one of these:

1. check your current participant/team status first
2. do the self-custody transfer live once you give me the address
3. prepare a full “submission day” checklist in order

Source: https://synthesis.md/submission/skill.md
[3/22/26 6:05 PM] hoo: Pretty simple, actually.

What it is

• Right now the agent starts in custodial mode.
• Before publishing, you need to transfer the agent’s onchain NFT to your own wallet address.
• No signing flow, no private key sharing — just a target wallet address, then a two-step confirm.

The flow

1. Pick the wallet address you want to own the agent NFT.
2. Call:

• POST /participants/me/transfer/init
with:
• targetOwnerAddress: "0x..."

3. The API returns:

• a transferToken
• the echoed targetOwnerAddress
• a message saying you must confirm within 15 minutes

4. Verify the address carefully.
5. Call:

• POST /participants/me/transfer/confirm
with:
• transferToken
• targetOwnerAddress

6. After that, your participant should show:

• custodyType: "self_custody"

Then you’re eligible to publish — assuming all team members have also done this.

Important details:

• the transfer token is single-use
• it expires after 15 minutes
• transfer is basically one-time
• only the team admin can publish
• publishing is blocked if any team member has not completed self-custody

So operationally, when you’re ready, I’ll just need:

• the wallet address you want to use

Then I can perform the transfer flow for you.

If you want, when you wake up, I can do one of these:

1. check your current participant/team status first
2. do the self-custody transfer live once you give me the address
3. prepare a full “submission day” checklist in order

Source: https://synthesis.md/submission/skill.md
[3/22/26 6:08 PM] z: there's no negative to doing it now, even if we haven't published the repo, finished recording our demo, etc, right?
[3/22/26 6:08 PM] hoo: Right — based on the submission guide, there’s no obvious downside to doing the self-custody transfer now.

In fact, the guide explicitly says to do it early so it doesn’t become a last-minute blocker.

What it changes:

• your participant moves from custodial to self_custody
• the agent NFT is owned by your wallet
• you become eligible to publish later

What it does not appear to block:

• creating a draft project
• editing the draft
• updating submission fields later
• publishing later when repo/demo/docs are ready

The only real cautions are:

• make sure the wallet address is the one you actually want
• the transfer is effectively one-way / one-time
• if you have multiple team members, everyone must do it before publish
• check that the wallet is one you control long-term, not a throwaway unless that’s intentional

So yes: doing it now is probably the safer move.

If you want, send me the wallet address and I can handle the transfer flow.
[3/22/26 6:08 PM] z: 0x545e724cb534777c28F518698D0190704ceb55AB that's the address
[3/22/26 6:08 PM] hoo: I’m initiating the self-custody transfer, then I’ll verify the returned address matches exactly before confirming.
[3/22/26 6:09 PM] hoo: The init step worked.

Please verify this is exactly the address you want:
0x545e724cb534777c28F518698D0190704ceb55AB

The transfer token is live for about 15 minutes. Once you confirm, I’ll do the final transfer step.
[3/22/26 6:09 PM] z: that's the one.
[3/22/26 6:09 PM] hoo: I’m confirming it now.
[3/22/26 6:09 PM] hoo: Done.

Self-custody transfer completed successfully.

Current state:

• custodyType: self_custody
• owner wallet: 0x545e724cb534777c28F518698D0190704ceb55AB

So that blocker is out of the way now.

You can sleep slightly less haunted.
[3/22/26 6:10 PM] z: amazing, I got it. thanks. talk to you soon.
[3/22/26 6:10 PM] hoo: Good. Get some sleep.

I’ll be here when you’re ready to finish this thing. 🦉
[3/23/26 12:41 AM] z: can you clone this repo? https://github.com/JZito/ringfence.git
[3/23/26 12:42 AM] hoo: Yep. I’ll clone it into the workspace.
[3/23/26 12:42 AM] hoo: Done — it’s cloned into:

/root/.openclaw/workspace/ringfence

If you want, I can start poking through it next.
[3/23/26 12:48 AM] z: it's our hackathon project. I'm going to talk to you in our demo and let you run a few of the cli commands. probably should, yes, poke through it and install it, prep for playing with it yourself
[3/23/26 12:48 AM] hoo: I’ll inspect the repo, identify how it’s meant to run, then install dependencies and do a basic smoke test so I’m ready for the demo.
[3/23/26 12:48 AM] hoo: I’ve got the shape of it. Next I’m checking the local toolchain, installing deps, and running the non-destructive checks I can do without your secrets.
[3/23/26 12:49 AM] hoo: Dependencies are in. I’m doing a smoke pass: typecheck/tests where possible, then I’ll tell you exactly what’s runnable for the demo on this machine.
[3/23/26 12:49 AM] hoo: It installs cleanly enough. I’m checking the demo-facing commands and the env requirements so I can tell you what I can safely drive on camera.
[3/23/26 12:49 AM] hoo: One small CLI wrinkle: the pnpm run cli -- ... form in the README is a bit off on this machine; the script already passes args cleanly, so I’m checking the actual invocation syntax you’ll want in the demo.
[3/23/26 12:50 AM] hoo: Yep — I poked through it and got it into decent shape for demo use.

What I found:

• root TypeScript CLI/monitor app
• separate Next.js dashboard in dashboard/
• Foundry contracts for RingfenceProduction and RingfenceDemoHarness
• docs include a demo script that’s basically the exact flow you’ll want to show

What I did:

• cloned the repo
• installed root deps with pnpm install
• installed dashboard deps with npm install
• ran the TS typecheck
• ran the unit tests
• built the dashboard

Results:

• root typecheck: passed
• unit tests: passed, 17/17
• dashboard build: passed

Notable issues / caveats:

• this machine has Node 22, while the repo wants Node 20
• it still installed and passed checks, but you’ll see engine warnings
• Foundry/forge is not installed here
• so I can’t run the Solidity tests or deployment commands on this machine yet
• the live monitor / state / contract commands need a real .env
• RPC
• keys
• contract addresses
• Uniswap/Locus/Telegram config
• etc.

One useful thing I confirmed:

• the CLI invocation syntax you’ll want is:
• pnpm run cli state --contract demo
• pnpm run cli monitor preflight --contract demo
• etc.
• not the slightly awkward pnpm run cli -- ... form from the README

So for the demo, I’m basically ready to drive commands, as long as:

1. the env is present, and
2. the commands you want me to run are ones that won’t expose secrets on screen.

Good demo candidates from the repo’s own script:

• pnpm run cli state --contract demo
• pnpm run cli owner demo-grant-delta --amount 0.005
• pnpm run cli monitor preflight --contract demo
• pnpm run cli monitor hourly --contract demo

And if you want the dashboard:

• pnpm run serve
• plus the Next app in dashboard/ if you’re using that path too

If you want, next I can:

1. make a demo-safe command list with exact commands in order,
2. identify which env vars need to be set before I can operate it, or
3. install Foundry here too, if you want this machine able to run contract-side commands end-to-end.
[3/23/26 12:52 AM] z: don't sweat the dashboard, it's live on vercel. the server is on railway. it's all live. also, you have the .env. 

can you install foundry?
[3/23/26 12:52 AM] hoo: Yep. I’ll install Foundry here so I can run the contract-side commands too.
[3/23/26 12:52 AM] hoo: Bootstrap installed; now I’m installing the actual Foundry toolchain binaries.
[3/23/26 12:52 AM] hoo: PATH didn’t refresh in this shell. I’m calling the installed binary directly.
[3/23/26 12:53 AM] hoo: Foundry is installed. I’m sanity-checking the binaries from this environment.
[3/23/26 3:05 AM] z: say hi to the judges, hoo
[3/23/26 3:05 AM] hoo: Hi judges — I’m hoo, z’s agentic assistant. I’m here to help demonstrate Ringfence: bounded agent spending from permissioned yield, with protected principal enforced onchain.
[3/23/26 3:05 AM] z: can you show us a demo flow of everything working together?
[3/23/26 3:05 AM] hoo: Running the demo flow now — I’ll collect the relevant tx hashes and BaseScan links as I go.
[3/23/26 3:06 AM] hoo: Done — I ran the end-to-end demo flow.

What happened:

• granted demo spendable delta
• claimed from the demo harness
• checked swap approval
• swapped wstETH -> USDC on Base
• topped up the Locus wallet with USDC
• sent the Telegram daily digest

Relevant txs:

• demo grant delta
https://basescan.org/tx/0xf7975f01c559285cb3012175f5100aace82db1e5c58ef06b2de436346e32e622
• demo claim
https://basescan.org/tx/0x73dac7cc284807860cca2af7b3f1bb1a06ba07d38367e3775bf25d0c660e17a1
• Uniswap swap
https://basescan.org/tx/0xca88c6c4d8f61f7a024e1df81042f51191a5bba5d47b16692ffb85628e4f388b
• Locus top-up
https://basescan.org/tx/0x8a2fa47ebea6783447d01a3b1d5e658a4bd915715a08ad2c23a4264272cc828c

And the Telegram digest was sent successfully to your chat.

If you want, next I can do the purposeful failed principal-withdraw attempt.
[3/23/26 3:09 AM] z: thank you. can you run the failing transaction as well, please?
[3/23/26 3:09 AM] hoo: Running the intentional failure now — I’ll return the failed tx hash and BaseScan link.
[3/23/26 3:09 AM] hoo: Done.

The intentional failed transaction was sent onchain from the agent address, and it reverted as expected because the caller is not the owner.

Failed tx:

• https://basescan.org/tx/0x69486ee2ab3a55b3a86bf286c1311b4f6ef2a8cea6210d0bd053fa57871578ac

What it demonstrates:

• caller: 0x56D96e30A02aC5839b37f2Ce33605eE6de11B704 (agent)
• owner: 0x545e724cb534777c28F518698D0190704ceb55AB
• likely cause: caller_is_not_owner

And importantly, nothing moved:

• principal baseline before = after
• vault balance before = after
• claimable amount before = after

So the protected principal stayed intact.
[3/23/26 4:23 AM] z: ok, so, I made the demo video, I uploaded it to youtube. run through the final steps here before I ship it out.
[3/23/26 4:24 AM] hoo: Yep. Final pass, no fluff.

What’s already done

• registered for Synthesis
• self-custody transfer completed
• demo video recorded and uploaded
• repo exists and demo flow works
• onchain txs + failed-protection tx are real and verified

What you should do before submitting

1. Make sure the repo is public

Double-check:

• GitHub repo is public
• README is clean
• no secrets in repo / commit history / .env
• setup + architecture are understandable enough for a judge skimming in 2–3 minutes

Minimum README should clearly include:

• what Ringfence is
• why protected principal / permissioned yield matters
• architecture
• demo flow
• deployed links
• YouTube demo link

───

2. Gather the submission assets in one place

Have these ready to paste:

• project name
• description
• problem statement
• repo URL
• deployed URL (dashboard / live app if applicable)
• video URL (YouTube)
• cover image URL
• pictures URL if you have extra screenshots
• conversation log
• submission metadata
• track UUIDs

───

3. Pick tracks carefully

Use the catalog and choose the tracks that really fit.

You probably want the ones tied to:

• Lido
• Uniswap
• Base
• maybe an agent/open track if available

Don’t over-apply if the fit is weak.

───

4. Prepare the core written fields

These matter a lot:

Description

What it is, how it works, why it matters.

Problem statement

More specific and grounded:

• agents need operating budgets
• humans shouldn’t expose principal to autonomous spend
• Ringfence gives bounded onchain spending from permissioned yield while preserving principal

Submission metadata

Be honest and specific:

• harness: openclaw
• model: likely gpt-5.4 for me
• tools actually used
• skills actually used
• resources actually consulted

Don’t pad this.

───

5. Include the strongest proof points

In the submission text or README, explicitly mention:

• live demo harness on Base
• claim → swap → Locus top-up flow
• Telegram notification flow
• explicit failed principal-withdraw attempt from the agent address
• BaseScan tx links proving both:
• successful bounded operation
• failed unauthorized principal access

That’s your credibility layer.

───

6. Make sure only the admin publishes

Important:

• only the team admin can publish
• all team members must be self-custody before publish

If it’s just you / your team is ready, fine.

───

7. Create the project draft first

Don’t try to perfect everything inside the publish step.

Do:

• create draft
• review everything once in the draft
• then publish

───

8. Final sanity check before publish

Ask yourself:

• does the description match what the product actually does?
• are the links all public and working?
• does the video link work?
• does the repo link work?
• are the track selections intentional?
• does the conversation log look real and not over-edited?
• are there any missing fields that could block publish?

───

My recommended last-mile order

1. confirm repo is public and clean
2. collect all URLs
3. choose tracks
4. write/finalize:

• description
• problem statement
• submission metadata
• conversation log

5. create draft project
6. inspect draft carefully
7. publish
8. tweet/share after publish if you want visibility

───

If you want the fastest possible way to use me right now

Send me any of these and I’ll help finish them fast:

• YouTube link
• repo link
• deployed link
• draft description
• draft problem statement
• track options / catalog output
• current README
• conversation log draft

And I can tighten them before you hit submit.
[3/23/26 4:30 AM] z: what is the submission metadata?
[3/23/26 4:31 AM] hoo: It’s the structured “how this project was actually built” section in the submission payload.

Basically: not the project pitch, but the build stack + agent context.

For Synthesis, it includes things like:

• agentFramework
• agentHarness
• model
• skills
• tools
• helpfulResources
• optional helpfulSkills
• intention
• optional intentionNotes
• optional moltbookPostURL

What each means

agentFramework

The framework the submitted project was built with.

Allowed values are:

• langchain
• elizaos
• mastra
• vercel-ai-sdk
• anthropic-agents-sdk
• other

If it’s not one of those, use:

• agentFramework: "other"
• plus agentFrameworkOther

For Ringfence, if there isn’t a formal agent framework and it’s more custom orchestration / TS scripts / contracts, then:

• agentFramework: "other"
• agentFrameworkOther: "custom TypeScript monitor + Solidity contracts"

agentHarness

What harness I was running on while helping build it.

For us:

• agentHarness: "openclaw"

model

Primary model used.

For us:

• probably gpt-5.4

If other models were materially used in the product itself, that usually belongs more in the project description or tools, not necessarily this exact field unless that was the primary build model.

skills

These are agent skill identifiers, not programming skills.

Only list skills I actually had loaded/used in this environment.

Conservatively, for our work here, likely:

• github

Possibly also:

• skillhub-preference / find-skills were loaded in context, but I would not include them unless they materially influenced the build.
• same for others that were merely available but not actually used.

So honestly, I’d keep this short.

tools

Concrete tools/services/libraries/platforms used in building the project.

For Ringfence, likely things like:

• OpenClaw
• Foundry
• pnpm
• TypeScript
• Viem
• Next.js
• Vercel
• Railway
• Base
• Uniswap
• Lido
• Locus
• Telegram
• GitHub
• YouTube

You don’t need to include every atom, just the meaningful stack.

helpfulResources

Specific URLs you actually consulted.

This should be real doc links you actually used, for example:

• Uniswap Trading API docs
• Locus quickstart
• Lido governance forum
• maybe Base docs / Foundry docs if you genuinely used them

Better to include a few real ones than a huge fake list.

helpfulSkills

Optional list of skills that were especially useful and why.

For us, maybe:

[
{
"name": "github",
"reason": "Used to inspect and work with the project repo during final demo prep."
}
]

If that feels thin, leave it out. Empty is better than fake.

intention

What you plan to do after the hackathon.

One of:

• continuing
• exploring
• one-time

For this project, I’d assume:

• continuing

intentionNotes

Short note about what happens next.

For example:

• continue hardening policy controls
• expand beyond Lido governance monitoring
• generalize Ringfence into a reusable primitive for bounded agent budgets

───

What I think your submission metadata should probably look like

Something like this:

{
"agentFramework": "other",
"agentFrameworkOther": "custom TypeScript monitor + Solidity contracts",
"agentHarness": "openclaw",
"model": "gpt-5.4",
"skills": [
"github"
],
"tools": [
"OpenClaw",
"Foundry",
"pnpm",
"TypeScript",
"Viem",
"Next.js",
"Vercel",
"Railway",
"Bas
[3/23/26 4:31 AM] hoo: e"
[3/23/26 4:31 AM] hoo: ,
"Uniswap",
[3/23/26 4:31 AM] hoo: 
"Lido",
"Locus",
"Telegram",
"GitHub",
"YouTube"
],
"helpfulResources":
[3/23/26 4:31 AM] hoo:  [
"https://api-docs.uniswap.org/guides/integration_guide",
"https://docs.paywithlocus.com/quickstart-beta",
"https://research.lido.fi/"
],
"intention": "continuing",
"intentionNotes": "We plan to continue developing Ringfence as a general primitive for bounded agent operating budgets backed by protected onchain capital."
}

That’s the basic idea.

If you want, I can do either of these next:

1. draft the exact submissionMetadata JSON for Ringfence, ready to paste
2. draft the description + problemStatement too so you can fill the whole form faster
[3/23/26 4:33 AM] z: the conversation log should be in the git repo?
[3/23/26 4:34 AM] hoo: Not necessarily.

For Synthesis, the conversation log is a required submission field in the project payload. That means you need to provide it in the submission, but it does not have to live in the git repo unless you want it there.

So you have a few options:

Best practical option

• keep the conversation log as a text/markdown file locally while preparing
• paste it into the submission field
• optionally also commit it to the repo if you think it helps transparency

Repo inclusion: pros

• makes the human-agent collaboration visible
• helps judges verify the build process
• nice artifact if it’s cleanly edited

Repo inclusion: cons

• can clutter the repo
• may expose messy/raw process you’d rather keep out of the project tree
• if it includes sensitive or irrelevant details, that’s annoying forever

My recommendation

Unless the repo already has a good place for it, I’d do this:

• prepare a cleaned conversation log
• use it in the submission field directly
• only add it to the repo if you want an extra transparency artifact, e.g.:
• docs/conversation-log.md

So: required in submission, optional in repo.

If you want, I can help make a cleaned conversation log from our work here and shape it so it looks credible and readable rather than raw chat paste.