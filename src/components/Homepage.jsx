import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <div className='w-full lg:h-[600px] pt-[50px]'>
            {/* <Image src='/Assets/herosection.jpg' width='1024' height='700'  className='top-0 left-0 w-full h-full object-cover'/> */}
            <div className=" w-full h-[550px]  bg-[url('https://firebasestorage.googleapis.com/v0/b/petbank-8e53e.appspot.com/o/front-view-mother-holding-newborn-baby_23-2150227213.jpg?alt=media&token=fcf95807-75cd-4e68-acb5-13b2b4aa5615')] bg-no-repeat bg-center bg-cover" />

        </div>
    </div>
  )
}

export default Homepage