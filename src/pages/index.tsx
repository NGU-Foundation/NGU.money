// Page index.tsx
import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { NodeProvider } from '@alephium/web3';

// Graphics
import { ThreeTorus } from '@/components/ThreeTorus';
import { Navbar } from '@/components/NavBar';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div>

        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <Navbar></Navbar>
        <ThreeTorus></ThreeTorus>
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
          <div className={`${styles.showBorder} ${styles.uiNav}`} style={{height: 300}}>
            <table className={styles.uiNavItems}>
              <tr> <button className={styles.buttonSite}> <Link href="/token_create" className={styles.link}> Enter NGU! </Link></button> </tr>
            </table>
          </div>
        </div>
        <br/>
      </div>
  )
}
