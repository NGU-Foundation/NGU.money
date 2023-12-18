// components/tokencreate.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './homepage.module.css';
import { FC, useState } from 'react';

// Alephium Imports
import { BuildToken } from '../services/service'
import { useWallet } from '@alephium/web3-react';
import { TokenCreate } from '@/services/utils';

// Sub Components

export const TokenAutomationCreate: FC<{
    config: TokenCreate
}> = ({ config }) => {
    // Config
    const { signer, account } = useWallet()
    const addressGroup = config.groupIndex
    // Tx ID
    const [ongoingTxId, setOngoingTxId] = useState<string>()
    // Symbols
    const [symbol, setSymbol] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [decimals, setDecimals] = useState('')
    const [supply, setSupply] = useState('')
  
    const [amount, setAmount] = useState('')
    const [token, setToken] = useState<string>("")
  
    // Handle of TokenCreation
    const handleBuildTokenSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (signer) {
        const result = await BuildToken(signer, symbol, name, decimals, supply)
        setOngoingTxId(result.txId)
      }
    }
  
    console.log('ongoing..', ongoingTxId)
  
    // Form submit to insert values and receive input
return (
    <>
      <br/>
      <div>
        <form onSubmit={handleBuildTokenSubmit}>
          <>
            <h2>Alephium Token Builder ({config.network})</h2>
            {/*<p>PublicKey: {context.account?.publicKey ?? '???'}</p>*/}
            <p>Create your token here with a fee of 1 ALPH for the contract deposit + gas fees.</p>
            <label htmlFor="symbol">Symbol :</label>
            <input
                type="text"
                id="symbol"
                name="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <br/>
            <label htmlFor="name">Name :</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Decimals :</label>
            <input
                type="number"
                id="decimals"
                name="decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
            />
            <br/>
            <label htmlFor="symbol">Supply :</label>
            <input
                type="number"
                id="supply"
                name="supply"
                value={supply}
                onChange={(e) => setSupply(e.target.value)}
            />
            <br/>
            <br/>
            <input type="submit" disabled={!!ongoingTxId} value="Create Token" />
          </>
        </form>
      </div>
      <br/>
    </>
  )
}
  