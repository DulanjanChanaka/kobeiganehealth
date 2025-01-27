"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../firebase/firebase";
import Navbar from "./Navbar";

function Woman() {
  const [personPost, setPersonPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonPost = async () => {
      try {
        const returnPostQuery = query(collection(db, "woman"));
        const returnPostCollection = await getDocs(returnPostQuery);
        const returnPostData = returnPostCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonPost(returnPostData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item posts:", error);
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
      <div className="md:pt-[90px] pt-[80px]">
        <h3 className="text-center font-bold text-2xl text-gray-200 ">
          සුව නාරි සායන
        </h3>
        <div className="hidden md:block">
          <Link
            href={"/"}
            className="hover:bg-neutral-400 text-sm mb-4 block bg-sky-600 w-[80px] text-white ml-10 text-center py-2 px-2 rounded-xl"
          >
            Go Back
          </Link>
        </div>
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className="overflow-x-auto p-4 ">
            <table className="table-auto w-full border-collapse border border-gray-300 text-left ">
              <thead>
                <tr className="bg-gray-200 ">
                  <th className="px-4 py-2 border border-gray-300">Month</th>
                  <th className="px-4 py-2 border border-gray-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {personPost.map((item, index) => (
                  <React.Fragment key={index}>
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
                    ].map((month, monthIndex) => (
                      <tr
                        key={monthIndex}
                        className={
                          monthIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }
                      >
                        <td className="px-4 py-2 border border-gray-300 capitalize font-medium text-gray-700">
                          {month}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-blue-600">
                          {item[month] || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Woman;
