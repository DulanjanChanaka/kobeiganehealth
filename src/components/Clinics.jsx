
import React from 'react'
import Headline from './Headline'
import Link from 'next/link'
import Image from 'next/image'

const Clinics = () => {
    return (
        <div id='clinics' className='w-full  p-2'>
            <div className='px-10 mx-auto flex flex-col justify-center h-full'>
                <Headline title="Clinics" />


                <div className='grid lg:grid-cols-4 gap-8 '>




                    <Link href='/weight'>
                        <div className='p-6 bg-slate-50  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]' >
                            <div className='grid grid-cols  text-center  justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/weight.png' width='94' height='94' alt='/' className='rounded-lg' />
                                </div>
                                <div className=''>
                                    <h3 className='text-center text-lg font-bold '>බර කිරීමේ සායනය </h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='/hospital'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/hospital.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>කොබෙ/ රෝහල් සායන</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/mother'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/mother.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>මාතෘ හා ළඳරු සායන</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/moh'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/moh.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>MOH සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/woman'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/women.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>සුවනාරි සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/thriposha'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/thriposha.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>ත්‍රිපෝෂ බෙදා දීම </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/medical">
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/baby.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>ඔබේ දරුවාගේ සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/telephone">
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/telephone.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold '>දුරකථන අංක </h3>
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