import Image from 'next/image'
import React from 'react'
import Headline from './Headline'
import Link from 'next/link'

const Clinics = () => {
    return (
        <div id='skills' className='w-full px-5 pt-12 pb-20'>
            <Headline title='සායන' />
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center pt-6'>

                <h2 className='py-4'></h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <Link href='/weight'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/weight.png' width='64' height='64' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center'>බර කිරීමේ සායන  </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/hospital'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/boclinic.png' width='64' height='64' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center '>රෝහල් සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/mother'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/mother.png' width={64} height={64} alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center'>මාතෘ හා ළමා සායන  </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/moh'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/moh.png' width={64} height={64} alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>MOH සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/woman'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/women.png' width={64} height={64} alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>සුවනාරි සායන</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/thriposha'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/thriposha.png' width={64} height={64} alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>ත්‍රිපෝෂ ලබා දීම </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/assets/well.png' width={64} height={64} alt='/' />
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