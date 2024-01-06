import React, { useCallback } from 'react'
import { FC, useState } from 'react'
import { deposit } from '@/utils/services'
import { useWallet } from '@alephium/web3-react'
import { node } from "@alephium/web3"
import { SubscribeConfig } from '@/utils/utils'

export const SubscribeSignals: FC<{
  config: SubscribeConfig
  }> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [discord, setDiscord] = useState<string>("")

  const handleSignalSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signer) {
      const result = await deposit(signer, discord)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSignalSubscribe}>
          <>
            <h2> NGU Signal Subscription {config.network}</h2>
            <p>PublicKey: {account?.publicKey ?? '???'}</p>
            <p>777 $NGU to activate signals membership, must be renewed monthly.</p>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <th>group</th>
                </tr>
              </thead>
              <tbody>
                <tr key={addressGroup} style={{ background: 'red', color: 'white' }}>
                  <td>{config.subscribeID}</td>
                  <td>{addressGroup}</td>
                </tr>
              </tbody>
            </table>
            <label htmlFor="signals-deposit">Amount</label>
            <input
              type="text"
              id="discordname"
              name="discordname"
              value={"Discord Name"}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <br />
            <input type="submit" value="Sign Me Up" />
          </>
        </form>
      </div>
    </>
  )
}