import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <div className='w-full lg:h-[600px] pt-[50px]'>
            {/* <Image src='/Assets/herosection.jpg' width='1024' height='700'  className='top-0 left-0 w-full h-full object-cover'/> */}
            <div className=" w-full h-[550px] bg-[url('https://www.portea.com/static/7160cf76fa9b907c95a9bb20cda41712/1abfa/1366x522_nb-baby-mom.jpg')] bg-no-repeat bg-center bg-cover" />

        </div>
    </div>
  )
}

export default Homepage