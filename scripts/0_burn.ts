import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Burn } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const deployFaucet: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(Burn, {
    // The initial states of the faucet contract
    initialFields: {
      token: "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002",    //! NGU TokenID
      burned: 0n,                                                                   //! Burned Amount
      dev: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",                         //! Owner
      feescollected: 0n                                                             //! Fees Collected
    }
  })
  console.log('Burn contract id: ' + result.contractInstance.contractId)
  console.log('Burn contract address: ' + result.contractInstance.address)
}

export default deployFaucet