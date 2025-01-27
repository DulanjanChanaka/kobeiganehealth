"use client";

import React from "react";
import Navbar from "./Navbar";

function Telephone() {
  const data = [
    {
      hospital: "නිකවැරටිය",
      tel: "0372 260 261",
    },
    {
      hospital: "කොබෙයිගනේ ",
      tel: "037 2293060",
    },
    {
      hospital: "හෙට්ටිපොල",
      tel: "037 2291061",
    },
    {
      hospital: "විරපොකුන",
      tel: " 032 2053061",
    },
  ];
  return (
    <div>
      <div className="top-0 left-0 sticky">
        <Navbar />
      </div>
      <div className="pt-[100px] px-3 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div key={index} className="px-3 py-2 bg-blue-300 mb-2 rounded-lg ">
            <div className="text-center text-lg font-bold">{item.hospital}</div>
            <div className="text-center">{item.tel}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Telephone;
