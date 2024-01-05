// Page index.tsx
import React from 'react'
import styles from '@/styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'

// Graphics
import { ThreeTorus } from '@/components/ThreeTorus';
import { Navbar } from '@/components/navbar';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div className={styles.indexPage}>

        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>

        <Navbar></Navbar>
        <div  style={{paddingLeft: 20, paddingTop: 20}}>
        <AlephiumConnectButton></AlephiumConnectButton>
        </div>
        

        <ThreeTorus></ThreeTorus>


        <div className={styles.nguMoney}>
          <br/>
          <div className={styles.NFTheader}>
          <h1 className={styles.alphpacaTitleGlow}> NGU.Money&apos;s </h1>
          <h5 className={styles.pacaDescript}> Number Go Up! </h5>
          </div>

          <div className={styles.movingText}>
            <TypeAnimation
              sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "You buy; Number Go Up!",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "You sell; Number Go Up!",
                  1000,
                  'You do nothing; Number Go Up',
                  1000,
                  'Welcome to NGU!',
                  1000,
              ]}
              speed={30}
              repeat={Infinity}
            />
          </div>

          <div className={styles.uiHub}>
            <div className={`${styles.showBorder} ${styles.uiNav}`} style={{height: 80}}>
              <table className={styles.uiNavItems}>
                <tr> <button className={styles.buttonSite}> <Link href="/token_create" className={styles.link}> Enter NGU! </Link></button> </tr>
              </table>
            </div>
          </div>
          <br/>
        </div>
      </div>
  )
}
