import {
  encodeFunctionData,
  type Abi,
  type Account,
  type Address,
  type Hex,
} from "viem";

import { recordTx } from "./history.js";
import type { TransactionRequest } from "./types.js";

export async function sendEncodedTransaction(input: {
  publicClient: any;
  walletClient: any;
  account: Account;
  to: Address;
  data: Hex;
  step: string;
  value?: bigint;
  gas?: bigint;
  gasPrice?: bigint;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  simulate?: boolean;
  allowRevert?: boolean;
}) {
  const {
    publicClient,
    walletClient,
    account,
    to,
    data,
    step,
    value = 0n,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    simulate = true,
    allowRevert = false,
  } = input;

  if (simulate) {
    await publicClient.call({
      account: account.address,
      to,
      data,
      value,
    });
  }

  const gasLimit =
    gas ??
    ((await publicClient.estimateGas({
      account: account.address,
      to,
      data,
      value,
    })) * 120n / 100n);

  const txRequest: any = {
    account,
    to,
    data,
    value,
    gas: gasLimit,
  };
  if (gasPrice !== undefined) {
    txRequest.gasPrice = gasPrice;
  } else {
    if (maxFeePerGas !== undefined) {
      txRequest.maxFeePerGas = maxFeePerGas;
    }
    if (maxPriorityFeePerGas !== undefined) {
      txRequest.maxPriorityFeePerGas = maxPriorityFeePerGas;
    }
  }

  const hash = await walletClient.sendTransaction(txRequest);
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  recordTx(step, hash);

  if (receipt.status !== "success" && !allowRevert) {
    throw new Error(`${step} transaction reverted: ${hash}`);
  }

  return { hash, receipt };
}

export async function sendContractCall(input: {
  publicClient: any;
  walletClient: any;
  account: Account;
  address: Address;
  abi: Abi;
  functionName: string;
  args?: readonly unknown[];
  step: string;
  simulate?: boolean;
  allowRevert?: boolean;
  value?: bigint;
  gas?: bigint;
}) {
  const data = encodeFunctionData({
    abi: input.abi,
    functionName: input.functionName,
    args: input.args,
  });

  return sendEncodedTransaction({
    publicClient: input.publicClient,
    walletClient: input.walletClient,
    account: input.account,
    to: input.address,
    data,
    step: input.step,
    simulate: input.simulate,
    allowRevert: input.allowRevert,
    value: input.value,
    gas: input.gas,
  });
}

export async function sendTransactionRequest(input: {
  publicClient: any;
  walletClient: any;
  account: Account;
  transaction: TransactionRequest;
  step: string;
  simulate?: boolean;
  allowRevert?: boolean;
}) {
  const { transaction } = input;

  return sendEncodedTransaction({
    publicClient: input.publicClient,
    walletClient: input.walletClient,
    account: input.account,
    to: transaction.to,
    data: transaction.data,
    step: input.step,
    simulate: input.simulate,
    allowRevert: input.allowRevert,
    value: BigInt(transaction.value),
    gas: transaction.gasLimit ? BigInt(transaction.gasLimit) : undefined,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : undefined,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
      ? BigInt(transaction.maxPriorityFeePerGas)
      : undefined,
  });
}
