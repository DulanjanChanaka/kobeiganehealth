"use client";
import React from "react";

const Headline = ({ title }) => {
  return (
    <div className="flex gap-5  items-center justify-center py-5">
      <div className="bg-green-600 w-[80px] h-[2px]"></div>
      <h1 className="text-gray-600 uppercase text-2xl font-bold">{title}</h1>
      <div className="bg-green-600 w-[80px] h-[2px]"></div>
    </div>
  );
};

export default Headline;
