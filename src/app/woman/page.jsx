"use client"
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

function Woman() {
  const [personPost, setPersonPost] = useState([]);
const [selectedPost, setSelectedPost] = useState(null);
const [modalVisible, setModalVisible] = useState(false);



useEffect(() => {
    const fetchPersonPost = async () => {
     
        try {
            const returnPostQuery = query(collection(db, 'woman'));
            const returnPostCollection = await getDocs(returnPostQuery);
            const returnPostData = returnPostCollection.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPersonPost(returnPostData);
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
        <div className="md:pt-[90px] pt-[80px]">
        <div className="hidden md:block">
                <Link href={'/'} className=" hover:bg-neutral-400 text-sm mb-4 block bg-sky-600 w-[80px] text-white ml-10 text-center py-2 px-2 rounded-xl">
                    Go Back
                </Link>
                </div>
            {personPost.map((item) => {
                // Check if the item's date is equal to today's date
                

                return (
                    <div key={item.id} className=" overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>January: {item.january}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>February: {item.february}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>March: {item.march}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>April: {item.april}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>May: {item.may}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>June: {item.june}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>July: {item.july}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>August: {item.august}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>September: {item.september}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>October: {item.october}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>November: {item.november}</p>
                        </div>

                        <div className="p-6  bg-white mb-2 rounded-lg ">
                            <p>December: {item.december}</p>
                        </div>
                    </div>
                ) 
            })}
        </div>


    </div>
);
}

export default Woman