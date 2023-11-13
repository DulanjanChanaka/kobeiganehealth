import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <>
     <Headline title='අප ගැන '/>
    {/* <div id='about'className=' w-full  p-2 flex items-start pb-10 p-1 '>
       
        <div className='w-full m-auto md:grid grid-cols-3 gap-8 '>
            <div className='col-span-2'>
                
               
                <p className='py-2 text-gray-600 text-center '>
                  බොරලුවැව සෞක්‍ය ප්‍රදේශයේ ජනතාව සඳහා ගුණාත්මක හා සේවාවන් කාර්යක්ෂමව ලබා දීම අපගේ අරමුණයි. මෙම web අඩවිය ඔබට සායන තොරතුරු , සෞක්‍ය අද්‍යාපනික තොරතුරු ඇතුළු පහසුකම් රැසක් ඔබට ලබා දී ඇත. ඔබගේ ගැටළු යොමු කිරීම හා සේවාවේ ගුණාත්මකභාවය ඉහල නැංවීම සඳහා ඔබගේ අදහස්ද අපට බොහෝ සෙයින් අගයයි . නිවැරදි තොරතුරු , නිවැරදි වෙලාවට ඔබට පහසුවෙන් ලබා ගත හැක .

</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://i.ibb.co/qdxbJBd/Whats-App-Image-2023-11-04-at-21-49-33-a7bbab1e.jpg' alt="Description of the image" ></img>
            </div>
        </div>
    </div> */}
    <div className=' p-5 lg:px-[100px]'>
        <div className=' lg:flex flex-row   shadow-xl backdrop-blur-sm bg-white/70  drop-shadow-md rounded-lg'>
            <div className='p-5 flex flex-col justify-center lg:w-3/5'>
                <p className='text-xs '>DEVISION</p>
                <h1 className='text-2xl pb-3 '>KOBEIGANE  MOH</h1>
                <div className='h-[2px] bg-orange-400 w-[210px]'></div>
                <p className='  text-base pt-10 pb-5 '> බොරලුවැව සෞක්‍ය බල ප්‍රදේශයේ ජනතාව සඳහා ගුණාත්මක හා සේවාවන් කාර්යක්ෂමව ලබා දීම අපගේ අරමුණයි. මෙම web අඩවිය ඔබට සායන තොරතුරු , සෞක්‍ය අද්‍යාපනික තොරතුරු ඇතුළු පහසුකම් රැසක් ඔබට ලබා දී ඇත. ඔබගේ ගැටළු යොමු කිරීම හා සේවාවේ ගුණාත්මකභාවය ඉහල නැංවීම සඳහා ඔබගේ අදහස්ද අපට බොහෝ සෙයින් අගයයි . නිවැරදි තොරතුරු , නිවැරදි වෙලාවට ඔබට පහසුවෙන් ලබා ගත හැක .</p>
                
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