import Link from 'next/link'


const ActionSection = () => {
  return(
    <>
      <section className='slice slice-verify container flex flex-col space-y-8 items-center bg-red-400 justify-center py-10 text-white'>
        <header className='text-center space-y-4 undefined'>
          <h1 className='text-4xl md:text-6xl font-bold'></h1>
            <div className='prose max-w-screen-md text-center mx-auto text-opacity-75 text-2xl font-barrio'>
              <p>MOVING R&B AND SOUL MUSIC FROM THE BLOCK TO THE BLOCKCHAIN</p>
            </div>
        </header>
        <div className="text-center mx-auto text-xl">
        <p className='mx-20 max-w-md my-10'>Rhythm & Bizness is a Music NFT marketplace built on the Oasis protocol to help R&B creators bring their music to R&B lovers. With our marketplace artists of this particular genre will find their place to belong and showcase their work.</p>
            <Link href="mailto:rhythmandbizness@gmail.com">
                <a
                    className="inline-block px-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400">
                    SIGN UP NOW FOR UPDATES
                </a>
            </Link>
        </div>
      </section>
    </>
  )
}

export default ActionSection