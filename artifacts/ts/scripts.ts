/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as DepositScriptJson } from "../subscribe/Deposit.ral.json";
import { default as SubdestroyScriptJson } from "../subscribe/Subdestroy.ral.json";
import { default as UpdatedevfeeScriptJson } from "../subscribe/Updatedevfee.ral.json";
import { default as WithdrawdevScriptJson } from "../subscribe/Withdrawdev.ral.json";
import { default as WithdrawplatformScriptJson } from "../subscribe/Withdrawplatform.ral.json";

export const Deposit = new ExecutableScript<{
  contract: HexString;
  discordname: HexString;
}>(Script.fromJson(DepositScriptJson));
export const Subdestroy = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(SubdestroyScriptJson)
);
export const Updatedevfee = new ExecutableScript<{
  contract: HexString;
  newfee: bigint;
}>(Script.fromJson(UpdatedevfeeScriptJson));
export const Withdrawdev = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawdevScriptJson)
);
export const Withdrawplatform = new ExecutableScript<{ contract: HexString }>(
  Script.fromJson(WithdrawplatformScriptJson)
);
