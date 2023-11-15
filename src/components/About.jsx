import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <>
     <Headline title='අප ගැන  '/>

    <div className=' p-5 lg:px-[270px] w-full'>
        <div className=' lg:flex flex-row  w-full   shadow-xl backdrop-blur-sm bg-white/70  drop-shadow-md rounded-lg '>
            <div className='p-5 flex flex-col justify-center lg:w-3/5'>
                <p className='text-xs '>DEVISION</p>
                <h1 className='text-2xl pb-3 font-medium '>KOBEIGANE  MOH</h1>
                <div className='h-[2px] bg-orange-400 w-[210px]'></div>
                <p className='  text-base pt-10 pb-5 font-light'> බොරළුවැව සෞඛය බල ප්‍රදේශයේ ජනතාව සඳහා ගුණාත්මක හා කාර්යක්ෂම සේවාවක් ලබා දීම අපගේ අරමුණයි. මෙම වෙබ් අඩවිය ඔබට සායන තොරතුරු , සෞඛය අධ්‍යාපනික තොරතුරු ඇතුළු පහසුකම් රැසක් ඔබට ලබා දී ඇත. ඔබගේ ගැටළු යොමු කිරීම හා සේවාවේ ගුණාත්මකභාවය ඉහල නැංවීම සඳහා ඔබගේ අදහස් අප බොහෝ සෙයින් අගයයි . නිවැරදි තොරතුරු , නිවැරදි වෙලාවට ඔබට පහසුවෙන් ලබා ගත හැක . </p>
                
            </div>
            <div className='lg:w-2/5  w-full h-full '>
                <Image src='/Assets/about.jpg'  width='540' height='405' alt="about" />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About