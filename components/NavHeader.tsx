import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/R&BLogo.png'
import TwitterLogo from '../public/twittericon.svg'
import DiscordLogo from '../public/discordlogo.svg'
import InstaLogo from '../public/instagramlogo.svg'
import OpenSeaLogo from '../public/OpenSeaLogo.svg'

const NavHeader = () => {
    return(
        <>
        <header className='bleed grid grid-cols-5 fixed top-0 inset-x-0 h-20 z-30 bg-white bg-opacity-50 backdrop-blur border-t-4 border-red-400'>
          <div className='flex items-center'>
            <Image
              src={Logo}
              width={75}
              height={(75)}
              alt='Welcome To The Genesis Tapes'
              />
            </div>
            <nav className='text-xl col-span-3 flex items-center justify-center invisible md:visible'>
              <Link href='/'>
                <a className='underline decoration-red-400 decoration-solid decoration-4 underline-offset-4'>
                  Roadmap
                </a>
              </Link>
            </nav>
            <div className='flex items-center justify-end gap-x-4'>
                <nav className='flex items-center justify-center text-2xl gap-x-4 text-red-300'>
                  <Link href='https://twitter.com/thegenesistapes'>
                    <a title='Twitter'>
                      <Image
                        src={TwitterLogo}
                        width="24"
                        height="24"
                        alt="Genesis Tapes Twitter"
                      />
                    </a>
                  </Link>
                  <Link href='https://instagram.com/thegenesistapes'>
                    <a title='Instagram'>
                      <Image
                        src={InstaLogo}
                        width="24"
                        height="24"
                        alt="Genesis Tapes Insta"
                      />
                    </a>
                  </Link>
                  <Link href='https://discord.gg/j4EQZ2ewhf'>
                    <a title='Discord'>
                      <Image
                        src={DiscordLogo}
                        width="36"
                        height="36"
                        alt="Genesis Tapes Discord"
                      />
                    </a>
                  </Link>
                  <Link href='https://opensea.io/collection/genesistapesvolumeone'>
                    <a title='OpenSea Collection'>
                      <Image
                        src={OpenSeaLogo}
                        width="38"
                        height="38"
                        alt="View On Opensea"
                      />
                    </a>
                  </Link>
                </nav>
            </div>
        </header>
        </>

    )
}

export default NavHeader;