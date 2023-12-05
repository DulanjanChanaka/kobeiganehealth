"use client"
import React, { useEffect, useState } from 'react'
import Headline from './Headline'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function Educational() {

  const [data, setData] = useState([])

useEffect(()=>{
  const fetchData = async () => {
    try {
    
      const dataCollection = await getDocs(collection(db, 'education'));
      const postData = dataCollection.docs.map((doc) =>{
        return {
          id:doc.id,
          ...doc.data()
        }})
    setData(postData)
  } catch (error) {
    console.error('Error fetching item posts:', error);
  }
  }
 
  fetchData()
},[])


  const [selectedPost, setSelectedPost] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div id='contact' className='w-full'>
      <Headline title={" Educational "} />
      <div className=' mb-10 px-10 rounded-2xl   pt-8 pb-10  text-center'>
        <Slider {...settings}>
          {data.map((item) => (
            <div className=' h-[350px]    ' key={item.id}>

              <div className='mx-2 bg-gray-400 rounded-2xl'>


                <div className='h-[200px] w-full  bg-cover rounded-t-2xl' style={{ backgroundImage: `url('${item.url}')` }} />
                <div className='h-[150px]'>
                  <p className='text-white py-1 h-[60px] text-center px-1 overflow-x-hidden font-bold'>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</p>
                  <button
                    onClick={() => {
                      setSelectedPost(item);
                      setModalVisible(true);
                    }}
                    className="bg-blue-500  text-white py-1 px-4 mt-4  rounded"
                  >More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modalVisible && selectedPost && (
        <div className='fixed top-0 left-0 w-full h-full flex item-center justify-center'>
          <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-70 "></div>
          <div className="modal-container bg-white w-5/6 md:max-w-md mx-auto rounded lg:h-fit shadow-lg z-50 mt-[110px] mb-[20px] overflow-y-auto pb-5 ">
            <div className="modal-content py-4 text-left px-6 ">
              <div className='font-bold text-center'>{selectedPost.title}</div>
              <div className='w-[300px] h-[300px] bg-cover' style={{ backgroundImage: `url('${selectedPost.url}')` }} />

            </div>
            <div className='px-5'><p>{selectedPost.description}</p></div>
            <div className='pb-10 pr-10'>
            <button
              onClick={() => setModalVisible(false)}
              className=" bg-red-600 text-white hover:bg-gray-400 py-1 px-3 rounded float-right"
            >
              Close
            </button>

            </div>



          </div>

        </div>
      )}
    </div>

  )
}

export default Educational