"use client";
import React, { useEffect, useState } from "react";
import Headline from "./Headline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Educational() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = await getDocs(collection(db, "education"));
        const postData = dataCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item posts:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const settings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="education" className="w-full">
      <Headline title={"Educational"} />
      <div className="mb-10 px-10 rounded-2xl pt-8 pb-10 text-center">
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <Slider {...settings}>
            {data.map((item) => (
              <div className="h-[400px] px-4" key={item.id}>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  {/* Card Image */}
                  <div
                    className="h-[250px] bg-cover bg-center rounded-t-xl"
                    style={{ backgroundImage: `url('${item.url}')` }}
                  />
                  {/* Card Content */}
                  <div className="p-4">
                    <p className="text-gray-800 font-bold text-lg truncate">
                      {item.title.length > 50
                        ? `${item.title.substring(0, 50)}...`
                        : item.title}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedPost(item);
                        setModalVisible(true);
                      }}
                      className="bg-pink-500 hover:bg-pink-800 text-white mt-4 py-2 px-6 rounded-full shadow-md transition-transform transform hover:-translate-y-1"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Modal */}
      {modalVisible && selectedPost && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="modal-container bg-white w-5/6 md:max-w-md mx-auto rounded shadow-lg z-50 mt-[110px] mb-[20px] overflow-y-auto pb-5">
            <div className="modal-content py-4 text-left px-6">
              <div className="font-bold text-center">{selectedPost.title}</div>
              <div
                className="w-full h-[300px] bg-cover bg-center mt-4 rounded"
                style={{ backgroundImage: `url('${selectedPost.url}')` }}
              />
              <div className="px-5 mt-4">
                <p className="text-gray-700">{selectedPost.description}</p>
              </div>
              <div className="pb-10 pr-10">
                <button
                  onClick={() => setModalVisible(false)}
                  className="bg-red-600 text-white hover:bg-red-700 py-1 px-4 rounded float-right shadow-md"
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

export default Educational;
