import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <div id='about'className='w-full md:h-screen  p-2 flex items-start py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
            <Headline title="About"/>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'></p>
                <h2 className='py-4'></h2>
                <p className='py-2 text-gray-600'>The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services


</p>
            </div>
            <div className='w-full  h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/Assets/about.jpg' width='514' height='220' alt="about" />
            </div>
        </div>
    </div>
  )
}

export default About


// The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services