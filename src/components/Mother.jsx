"use client";

import React, { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "./Navbar";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Mother() {
  const [personPost, setPersonPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonPost = async () => {
      try {
        const returnPostQuery = query(collection(db, "mother"));
        const returnPostCollection = await getDocs(returnPostQuery);
        const returnPostData = returnPostCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonPost(returnPostData);
      } catch (error) {
        console.error("Error fetching item posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonPost();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/petbank-8e53e.appspot.com/o/free-photo-of-mother-embracing-her-baby-daughter.jpg?alt=media&token=6073e654-9247-484e-aa22-8a372fa0a54b')",
      }}
    >
      <div className="top-0 left-0 sticky">
        <Navbar />
      </div>
      <h3 className="text-center font-semibold text-2xl pt-[120px] text-gray-200">
        මාතෘ හා ළමා සායන
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          personPost.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center p-3">
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
              </div>
              <div className="p-3 flex flex-col items-center">
                <button
                  onClick={() => {
                    setSelectedPost(item);
                    setModalVisible(true);
                  }}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {modalVisible && selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 max-h-[90vh] overflow-y-auto scroll-smooth">
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                {selectedPost.title}
              </h3>
              <button
                onClick={() => setModalVisible(false)}
                className="text-red-600 font-bold text-lg hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                ✖
              </button>
            </div>
            <table className="table-auto w-full mt-4 text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">Month</th>
                  <th className="px-4 py-2 text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "january",
                  "february",
                  "march",
                  "april",
                  "may",
                  "june",
                  "july",
                  "august",
                  "september",
                  "october",
                  "november",
                  "december",
                ].map((month, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-2 capitalize text-gray-700 font-medium">
                      {month}
                    </td>
                    <td className="px-4 py-2 text-blue-600">
                      {selectedPost[month] || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end pt-6">
              <button
                onClick={() => setModalVisible(false)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mother;
