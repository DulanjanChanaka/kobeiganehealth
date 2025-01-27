"use client";

import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import Navbar from "./Navbar";

function Threeposha() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = await getDocs(collection(db, "threeposha"));
        const postData = dataCollection.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(postData);
      } catch (error) {
        console.error("Error fetching item posts:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full ">
      <div className="top-0 left-0 sticky">
        <Navbar />
      </div>

      {data.map((item, id) => (
        <div key={id} className="pt-[100px] px-3">
          <div className="bg-blue-400 text-white p-2 pb-3">
            <div className="text-lg text-center font-bold py-3">
              {item.title}
            </div>
            <div className="bg-white py-[1px] " />
            <div className="text-center pt-2">{item.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Threeposha;
