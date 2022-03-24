import Image from 'next/image'
// import ReactPlayer from 'react-player/youtube'


const AboutSection = () => {
  return(
    <>
      <section className='slice slice-feature bleed grid md:grid-cols-2 gap-12 mx-20 my-20'>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>FROM DSPs to NFTs</h1>
          <h2 className='text-3xl font-barrio'>Stake Your Place in R&B History</h2>
          <p>Selling your NFTs on our Marketplace will help you bring your music to the right fans and not depend on big name streaming services for income</p>
        </div>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>MAKE YOUR WALLET YOUR COLLECTION</h1>
          <h2 className='text-3xl font-barrio'>Own The Best R&B/Soul Music On The Blockchain</h2>
          <p>Helping you collect the music NFTs you want to keep and sell has always been the goal of Rhythm & Bizness</p>
        </div>
      </section>
      <section className='slice slice-feature bleed grid md:grid-cols-2 gap-12 mx-20'>
      <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>TAKE CONTROL OF YOUR DISTRO</h1>
          <h2 className='text-3xl font-barrio'>Sell your music the way you want to</h2>
          <p>Whether you want to sell singles, albums, tickets or something more out of the box, Rhythm & Bizness can be the tool to distribute your NFTs to your fans</p>
        </div>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>FIND THE STYLE THAT MATCHES YOUR TASTE</h1>
          <h2 className='text-3xl font-barrio'>From A Variety of R&B and Soul Artists</h2>
          <p>We want to Make Music Collectable Again especially for R&B lovers</p>
        </div>
      </section>
    </>
  )
}

export default AboutSection;