"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import Navbar from '@/components/Navbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Hospital() {


const [personPost, setPersonPost] = useState([]);
const [loading, setLoading] = useState(true)



useEffect(() => {
    const fetchPersonPost = async () => {
     
        try {
            const returnPostQuery = query(collection(db, 'hospital'));
            const returnPostCollection = await getDocs(returnPostQuery);
            const returnPostData = returnPostCollection.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPersonPost(returnPostData);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching item posts:', error);
        }
    };
    fetchPersonPost();
}, []);



return (
    <div>
      <div className="top-0 left-0 sticky">
                <Navbar />
            </div>
        <div className="pt-[80px] ">
        <h3 className='text-center font-semibold text-2xl pt-[30px]'>රෝහල් සායන </h3>
        {loading? (   <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>):( personPost.map((item) => {
                // Check if the item's date is equal to today's date
                

                return (
                    <div key={item.id} className=" overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                January: <span className='text-blue-600  px-10'>{item.january}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                February: <span className='text-blue-600  px-10'>{item.february}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                March: <span className='text-blue-600  px-10'>{item.march}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                April: <span className='text-blue-600  px-10'>{item.april}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                May: <span className='text-blue-600  px-10'>{item.may}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                June: <span className='text-blue-600  px-10'>{item.march}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                July: <span className='text-blue-600  px-10'>{item.july}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                August: <span className='text-blue-600  px-10'>{item.august}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                September: <span className='text-blue-600  px-10'>{item.september}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                October: <span className='text-blue-600  px-10'>{item.october}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                November: <span className='text-blue-600  px-10'>{item.november}</span>
                            </p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                        <p className="text-gray-600 text-base font-semibold ">
                                December: <span className='text-blue-600  px-10'>{item.december}</span>
                            </p>
                        </div>
                    </div>
                ) 
            }))}
           
        </div>


    </div>
);
}


export default Hospital