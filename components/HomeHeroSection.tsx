import Image from 'next/image'
import RnbHero from '../public/R&BHeroImage.png'



const HomeHeroSection = () => {
    return(
        <>
          <div className='bg-gray-900 aspect-w-16 aspect-h-9 my-20'>
            <Image
              src={RnbHero}
              layout='responsive'
              alt="Welcome To Rhythm & Bizness"
            />
          </div>
        </>
    )
}

export default HomeHeroSection