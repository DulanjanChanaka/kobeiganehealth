import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <>
<Headline title="About"/>
      <div id='about' className='w-full  p-3 flex '>

        <div className=' m-auto md:grid grid-cols-3 gap-8 bg-white  '>

          <div className='col-span-2 lg:w-4/5  px-3'>


            <p className='uppercase text-xl tracking-widest text-[#5651e5]'></p>
            <h2 className='py-4'></h2>
            <p className='py-2 text-gray-600 '>The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services


            </p>
          </div>
          <div className=' '>
            <Image className=' h-full object-cover' src='/Assets/about.jpg' width='514' height='220' alt="about" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About


// The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services