import { DUST_AMOUNT, ExecutableScript, ExecuteScriptResult, SignerProvider, contractIdFromAddress } from '@alephium/web3'
import { Deposit, Subdestroy, Withdrawdev, Withdrawplatform, Updatedevfee } from '../../artifacts/ts/scripts'
import { SubscribeConfig } from './utils'
import * as web3 from '@alephium/web3'

// Sendout and Withdraw and Destroy Functions
export const deposit = async (
  signerProvider: SignerProvider,                  
  discordname: string,                                                                                      
): Promise<ExecuteScriptResult> => {
  return await Deposit.execute(signerProvider, {
    initialFields: {
      contract: SubscribeConfig.subscribeID,                           // The contract
      discordname: web3.stringToHex(discordname)                       // The amount
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: SubscribeConfig.nguID, amount: 777000000n}]          // Asset in Wallet - add zero
  })
}