import { ONE_ALPH, NetworkId } from "@alephium/web3"
import { loadDeployments } from "../../artifacts/ts/deployments"

//* Interfaces
export interface BurnNGU {     //~ ngu burn contract
    network: NetworkId
    groupIndex: number
    contractAddress: string
    contractId: string
    nguID: string               //~ ngu token id
}

export interface TokenCreate {  //~ test token creation contract
    network: NetworkId
    groupIndex: number
    contractAddress: string
    contractId: string
    tokenContract: string
}

export interface TokenTemplate {  //~ test token template (cookie cutter)
    network: NetworkId
    groupIndex: number
    contractAddress: string
    contractId: string
}

//! SET NETWORK
export function getNetwork(): NetworkId {
    const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'testnet') as NetworkId
    return network
}

  
//* TokenCreate
function getTokenCreateConfig(): TokenCreate {
    const network = getNetwork()
    const createToken = loadDeployments(network).contracts.CreateToken.contractInstance // This is not in the initial setup but is super important
    const tokenTemplate = loadDeployments(network).contracts.Token.contractInstance
    const groupIndex = createToken.groupIndex
    const contractAddress = createToken.address
    const contractId = createToken.contractId
    const tokenContract = tokenTemplate.contractId   
    return { network, groupIndex, contractAddress, contractId, tokenContract}
}
  
//* TokenTemplate // For TokenCreation
function getTokenTemplateConfig(): TokenTemplate {
    const network = getNetwork()
    const TokenTemplate = loadDeployments(network).contracts.Token.contractInstance
    const groupIndex = TokenTemplate.groupIndex
    const contractAddress = TokenTemplate.address
    const contractId = TokenTemplate.contractId
    return {network, groupIndex, contractAddress, contractId}
}

//* NGU Burn
function getTokenBurnConfig(): BurnNGU {
    const network = getNetwork()
    const BurnNGU = loadDeployments(network).contracts.Burn.contractInstance
    const groupIndex = BurnNGU.groupIndex
    const contractAddress = BurnNGU.address
    const contractId = BurnNGU.contractId
    const nguID = "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502"     // MONTY COIN
    return {network, groupIndex, contractAddress, contractId, nguID}
}
  
// Exports
export const TokenCreate = getTokenCreateConfig()
export const TokenTemplate = getTokenTemplateConfig()
export const BurnNGU = getTokenBurnConfig()