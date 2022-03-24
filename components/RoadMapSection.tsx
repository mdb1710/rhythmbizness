const RoadMapSection = () => {
    return(
      <>
        <section id='first_roadmap' className='slice slice-roadmap bleed py-24 relative container rounded-3xl overflow-hidden'>
          <header className='text-center space-y-4 undefined'>
            <h1 className='text-4xl md:text-6xl font-bold font-barrio'>Roadmap</h1>
            <div className='prose max-w-screen-md text-center mx-auto text-black text-opacity-75 text-2xl'>
              <p>The roadmap represents the current vision and ideas of Rhythm & Bizness. It will be updated as we evolve for our users, but we will never veer from our ultimate goal of bringing R&B music to the blockchain.</p>
            </div>
          </header>
          <div className='container mx-auto space-y-16 mt-16'>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-red-400 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '25%' }}>
                  25%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>To create a fully functional NFT marketplace built on top of the OASIS Protocol</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-red-400 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '50%' }}>
                  50%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>To provide song streaming and song chart features to all artists who use our marketplace</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-red-400 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '75%' }}>
                  75%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>Token feature - allowing artists to create custom Tokens for their fans to buy.  This will allow the artists to crowdfund music NFT project</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-red-400 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '100%' }}>
                  100%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>Creating other NFT income opportunities for new and current artists on the marketplace</p>
              </div>
            </div>
  
          </div>
        </section>
      </>
    )
  }
  
  export default RoadMapSection