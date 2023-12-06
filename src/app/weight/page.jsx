"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs, query } from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import Navbar from '@/components/Navbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function Weight() {


    const [personPost, setPersonPost] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
      const fetchPersonPost = async () => {
        try {
          const returnPostQuery = query(collection(db, 'weight'));
          const returnPostCollection = await getDocs(returnPostQuery);
          const returnPostData = returnPostCollection.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPersonPost(returnPostData);
          setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
          console.error('Error fetching item posts:', error);
          setLoading(false); // Set loading to false in case of an error
        }
      };
      fetchPersonPost();
    }, []);


    return (
        <div>
                  <div className="top-0 left-0 sticky">
        <Navbar />
      </div>

      <h3 className='text-center font-semibold text-2xl pt-[120px]'>බර කිරීමේ සායන  </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[50px]  lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          // Display a loading spinner while data is being fetched
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          // Display your component content once data is loaded
          personPost.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <div className='text-center pt-5'>
                <h3>{item.title}</h3>
              </div>

              <div className="p-6">
                <p>{item.january}</p>
                <button
                  onClick={() => {
                    setSelectedPost(item);
                    setModalVisible(true);
                  }}
                  className="bg-blue-500 hover-bg-blue-600 text-white py-2 px-4 mt-4 rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>


            {modalVisible && selectedPost && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
                    <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-50 "></div>
                    <div className="modal-container bg-white w-3/4 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto pb-5">
                        <div className="modal-content py-4 text-left px-6 ">
                           
                            <div className='text-center py-3'> 
                            <h3>{selectedPost.title}</h3>
                            </div>


                            <p className="text-gray-600 text-base font-semibold py-3">
                                January: <span className='text-blue-600  px-10'>{selectedPost.january}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                February: <span className='text-blue-600  px-10'>{selectedPost.february}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                March: <span className='text-blue-600  px-10'>{selectedPost.march}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                April: <span className='text-blue-600  px-10'>{selectedPost.april}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                May: <span className='text-blue-600  px-10'>{selectedPost.may}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                June: <span className='text-blue-600  px-10'>{selectedPost.march}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                July: <span className='text-blue-600  px-10'>{selectedPost.july}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                August: <span className='text-blue-600  px-10'>{selectedPost.august}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                September: <span className='text-blue-600  px-10'>{selectedPost.september}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                October: <span className='text-blue-600  px-10'>{selectedPost.october}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3">
                                November: <span className='text-blue-600  px-10'>{selectedPost.november}</span>
                            </p>
                            <p className="text-gray-600 text-base font-semibold py-3 mb-5">
                                December: <span className='text-blue-600  px-10'>{selectedPost.december}</span>
                            </p>
                            <div className=''>

                            <button
                                onClick={() => setModalVisible(false)}
                                className=" bg-red-600 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded float-right"
                            >
                                Close
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Weight

