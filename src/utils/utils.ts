import { NetworkId, ONE_ALPH } from "@alephium/web3"
import { loadDeployments } from "../../artifacts/ts/deployments"

//* Interfaces
export interface SubscribeConfig {
  network: NetworkId
  groupIndex: number
  subscribeAddress: string               
  subscribeID: string                                                           // ID of the contract
  nguID: string
}

export function getNetwork(): NetworkId {
    const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId // change network
    return network
}

// Subscribe Config
function getSubscribeConfig(): SubscribeConfig {
    const network = getNetwork()
    const subscribe = loadDeployments(network).contracts.Subscribe.contractInstance
    const groupIndex = subscribe.groupIndex
    const subscribeAddress = subscribe.address
    const subscribeID = subscribe.contractId
    const nguID = "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501"     // token id
    return { network, groupIndex, subscribeAddress, subscribeID, nguID }
}

export const SubscribeConfig = getSubscribeConfig()
