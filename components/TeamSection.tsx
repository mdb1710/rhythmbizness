import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/R&BLogo.png'

const TeamSection = () => {
  return(
    <>
      <section className='slice slice-team bleed py-24 relative'>
        <header className='text-center space-y-4 undefined'>
          <h1 className='text-4xl md:text-6xl font-bold font-barrio'>MEET THE TEAM</h1>
          <div className='prose max-w-screen-md text-center mx-auto text-black text-opacity-75 text-2xl'>
            <p>The RHYTHM & BIZNESS team wants to help R&B Artists & Creators connect to music on the blockchain</p>
          </div>
        </header>
        
          <div className='text-center space-y-3 content-center'>
              <Image
                src={Logo}
                width={350}
                height={350}
                alt='Team Member'
              />
            <div className='space-y-1'>
              <h1 className='text-2xl uppercase font-bold'>MICHAEL D BONNER</h1>
              <h2>FOUNDER & CEO</h2>
            </div>
          </div>
        
      </section>
    </>
  )
}

export default TeamSection