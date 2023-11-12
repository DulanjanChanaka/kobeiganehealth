
import React from 'react'
import Headline from './Headline'
import Link from 'next/link'

const Clinics = () => {
    return (
        <div id='skills' className='w-full px-5 pt-8 pb-20'>
            <Headline title='සායන' />
            <div className='lg:px-10 w-full mx-auto flex flex-col justify-center '>

                <h2 className='py-4'></h2>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <Link href='/weight'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/C0LYmnK/weight.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center'>බර කිරීමේ සායන  </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/hospital'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md' >
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/VTTXB4C/mother.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center '>රෝහල් සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/mother'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/VTTXB4C/mother.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center'>මාතෘ හා ළමා සායන  </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/moh'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/ZWh0svS/moh.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>MOH සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/woman'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/mvNPdPs/women.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>සුවනාරි සායන</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/thriposha'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/LxtKwTM/thriposha.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>ත්‍රිපෝෂ ලබා දීම </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/'>
                        <div className='py-3 lg:pt-5 lg:h-[130px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300 backdrop-blur-sm bg-white/70  drop-shadow-md'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                <img src='https://i.ibb.co/mvNPdPs/women.png' width='94' height='94' alt='/' className='rounded-lg'/>
                                </div>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <h3>මාසික ඖෂධ සායන </h3>
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