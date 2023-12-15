/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as BurnContractJson } from "../Burn.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace BurnTypes {
  export type Fields = {
    token: HexString;
    burned: bigint;
    dev: Address;
    feescollected: bigint;
  };

  export type State = ContractState<Fields>;

  export type BurnEvent = ContractEvent<{
    who: Address;
    howmuch: bigint;
    when: bigint;
  }>;

  export interface CallMethodTable {
    getToken: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<BurnInstance, BurnTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as BurnTypes.Fields;
  }

  eventIndex = { Burn: 0 };
  consts = { Error: { InvalidAmount: BigInt(0) } };

  at(address: string): BurnInstance {
    return new BurnInstance(address);
  }

  tests = {
    getToken: async (
      params: Omit<TestContractParams<BurnTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getToken", params);
    },
    burn: async (
      params: TestContractParams<BurnTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "burn", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Burn = new Factory(
  Contract.fromJson(
    BurnContractJson,
    "",
    "4075f51affab6580d00f709f37f718a1222fa2151f7d4faa736579bcd1f1a727"
  )
);

// Use this class to interact with the blockchain
export class BurnInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<BurnTypes.State> {
    return fetchContractState(Burn, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeBurnEvent(
    options: EventSubscribeOptions<BurnTypes.BurnEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Burn.contract,
      this,
      options,
      "Burn",
      fromCount
    );
  }

  methods = {
    getToken: async (
      params?: BurnTypes.CallMethodParams<"getToken">
    ): Promise<BurnTypes.CallMethodResult<"getToken">> => {
      return callMethod(
        Burn,
        this,
        "getToken",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends BurnTypes.MultiCallParams>(
    calls: Calls
  ): Promise<BurnTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Burn,
      this,
      calls,
      getContractByCodeHash
    )) as BurnTypes.MultiCallResults<Calls>;
  }
}
