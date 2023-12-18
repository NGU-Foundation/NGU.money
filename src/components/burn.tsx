// components/burn.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './homepage.module.css';
import { FC, useState } from 'react';

// Alephium Imports
import { BurnTokenContract } from '../services/service'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { BurnNGU } from '@/services/utils'

// Sub Components

export const TokenAutomationCreate: FC<{
    config: BurnNGU
}> = ({ config }) => {
    const context = useAlephiumConnectContext()
    const addressGroup = config.groupIndex
    const [ongoingTxId, setOngoingTxId] = useState<string>()
    const [symbol, setSymbol] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [decimals, setDecimals] = useState('')
    const [supply, setSupply] = useState('')
  
    const [amount, setAmount] = useState('')
    const [token, setToken] = useState<string>("")
  
    // Burning Token
    const handleBurnToken = async (e: React.FormEvent) => {
        e.preventDefault()
        if (context.signerProvider) {
            const result = await BurnTokenContract(context.signerProvider, amount)
        }
    }
  
    // Gets the TX and updates according to status on chain
    const txStatusCallback = (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
        if ((status.type === 'Confirmed' && numberOfChecks > 2) || (status.type === 'TxNotFound' && numberOfChecks > 3)) {
            setOngoingTxId(undefined)
        }
        return Promise.resolve()
    } 
  
    console.log('ongoing..', ongoingTxId)
  
    // Form submit to insert values and receive input
return (
    <>
      <br/>
      <div>
        <form onSubmit={handleBurnToken}>
          <>
            <h2> Alephium Token Burner ({config.network}) </h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p> Burn your token + gas fees, there is no reverses all funds lost are lost. </p>
            <label htmlFor="amount">Amount :</label>
            <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br/>
            <br/>
            <input type="submit" disabled={!!ongoingTxId} value="Burn NGU" />
          </>
        </form>
      </div>

      <br/>
    </>
  )
}
  