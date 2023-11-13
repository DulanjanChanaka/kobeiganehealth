import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <>
     <Headline title='අප ගැන '/>

    <div className=' p-5 lg:px-[100px] '>
        <div className=' lg:flex flex-row   shadow-xl backdrop-blur-sm bg-white/70  drop-shadow-md rounded-lg '>
            <div className='p-5 flex flex-col justify-center lg:w-3/5'>
                <p className='text-xs '>DEVISION</p>
                <h1 className='text-2xl pb-3 font-medium '>KOBEIGANE  MOH</h1>
                <div className='h-[2px] bg-orange-400 w-[210px]'></div>
                <p className='  text-base pt-10 pb-5 font-light'> බොරලුවැව සෞක්‍ය බල ප්‍රදේශයේ ජනතාව සඳහා ගුණාත්මක හා සේවාවන් කාර්යක්ෂමව ලබා දීම අපගේ අරමුණයි. මෙම web අඩවිය ඔබට සායන තොරතුරු , සෞක්‍ය අද්‍යාපනික තොරතුරු ඇතුළු පහසුකම් රැසක් ඔබට ලබා දී ඇත. ඔබගේ ගැටළු යොමු කිරීම හා සේවාවේ ගුණාත්මකභාවය ඉහල නැංවීම සඳහා ඔබගේ අදහස්ද අපට බොහෝ සෙයින් අගයයි . නිවැරදි තොරතුරු , නිවැරදි වෙලාවට ඔබට පහසුවෙන් ලබා ගත හැක .</p>
                
            </div>
            <div className='lg:w-2/5 '>
                <img src='/Assets/about.jpg' alt="about" />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About