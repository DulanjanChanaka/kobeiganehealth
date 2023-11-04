import Image from 'next/image'
import React from 'react'


const Homepage = () => {
  return (
    <div>
        <div className='w-full h-50vh pt-10'>
            <Image src='/Assets/hero.jpg' width={1000} height={600} alt='baby' className='w-full lg:h-[700px]'/>
        </div>
    </div>
  )
}

export default Homepage