
import React from 'react'
import Headline from './Headline'
import Link from 'next/link'
import Image from 'next/image'

const Clinics = () => {
    return (
        <div id='category' className='w-full lg:h-screen p-2'>
        <div className='px-10 mx-auto flex flex-col justify-center h-full'>
        <Headline title="Clinics"/>
            
            
            <div className='grid lg:grid-cols-4 gap-8'>


 

           <Link href="/category/bathroomfaucets">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
            <div className='grid grid-cols  text-center  justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/Assets/weight.png' width='94' height='94' alt='/' className='rounded-lg'/>
                </div>
                <div className=''>
                    <h3 className='text-center text-lg font-bold '>Weight</h3>
                </div>
            </div>
            </div> 
            </Link>  
            <Link href="/category/cabinets">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols text-center gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/Assets/hospital.png' width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Hospital</h3>
                </div>
            </div>
            </div> 
            </Link>

            <Link href="/category/mirrors">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/Assets/mother.png' width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Mother and Baby</h3>
                </div>
            </div>
            </div> 
            </Link>

            <Link href="/category/lighting">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src='/Assets/moh.png' width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>MOH</h3>
                </div>
            </div>
            </div> 
            </Link>

            <Link href="/category/tile">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src='/Assets/women.png' width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Well Woman</h3>
                </div>
            </div>
            </div> 
            </Link>

            <Link href="/category/towelbar">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src='/Assets/thriposha.png' width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Threeposha</h3>
                </div>
            </div>
            </div> 
            </Link>

            <Link href="/category/accessories">
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols text-center  gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src='/Assets/drugs.png'width={94} height={94} alt='/' className='rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Monthly</h3>
                </div>
            </div>
            </div> 
            </Link>

           

            </div>
        </div>
    </div>
    )
}

export default Clinics