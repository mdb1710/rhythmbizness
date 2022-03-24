import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavHeader from '../components/NavHeader'
import HomeHeroSection from '../components/HomeHeroSection'
import ActionSection from '../components/ActionSection'
import AboutSection from '../components/AboutSection'
import RoadMapSection from '../components/RoadMapSection'
import TeamSection from '../components/TeamSection'
import OldTeamSection from '../components/OldTeamSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rhythm & Bizness</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavHeader />

      <main>
        <div>
          <HomeHeroSection />
          <ActionSection />
          <AboutSection />
          <RoadMapSection />
          <TeamSection />
        </div>
      </main>

      <footer className={styles.footer}>
          Copyright 2022 Code By MDB. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Home
