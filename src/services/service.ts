import {  } from '../../artifacts/ts/scripts'
import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { Buildtoken, Burnngu } from '../../artifacts/ts/scripts'
import { BurnNGU, TokenCreate } from './utils'
import * as web3 from '@alephium/web3'

// Token Creation Functions
export const BuildToken = async (
    signerProvider: SignerProvider,
    symbol: string,
    name: string,
    decimals: string,
    supply: string
  ): Promise<ExecuteScriptResult> => {
    return await Buildtoken.execute(signerProvider, {
      initialFields: {
        contract: TokenCreate.contractId,
        symbol: web3.stringToHex(symbol),
        name: web3.stringToHex(name),
        decimals: BigInt(decimals),
        tokenTotal: BigInt(supply)
      },
      attoAlphAmount: DUST_AMOUNT + web3.ONE_ALPH                // Notice no Asset required here. Means the user doesn't require $PACA.
    })
}

// Burn NGU Function
export const BurnTokenContract = async (
    signerProvider: SignerProvider,
    amount: string,
  ): Promise<ExecuteScriptResult> => {
    return await Burnngu.execute(signerProvider, {
      initialFields: {
        contract: BurnNGU.contractId,
        amount: BigInt(amount),
      },
      attoAlphAmount: DUST_AMOUNT,
      tokens: [{id: BurnNGU.nguID, amount: amount}]
    })
}