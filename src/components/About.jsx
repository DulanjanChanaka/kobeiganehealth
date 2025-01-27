"use client";

import React from "react";
import Image from "next/image";
import Headline from "./Headline";

const About = () => {
  return (
    <>
      <Headline title="About" />
      <div id="about" className="  lg:px-10  px-3 ">
        <div className="w-full  lg:grid grid-cols-2   bg-white  ">
          <div className=" px-3 lg:pt-[50px] text-center">
            <p className="py-2 text-gray-600 text-center">
              The aim of our organization is to provide financial and
              administrative services for the development of the Northern
              Province in Sri Lanka. This website contains valuable information
              for your awareness, including educational resources and economic
              development updates. We highly value your feedback, and your
              contributions are essential for the success of our services and
              the socio-economic progress we aim to achieve. Please feel free to
              share your thoughts and contribute to the discussion on the
              significance of financial and administrative services for the
              betterment of the community. Your accurate information and
              meaningful insights are crucial for your understanding and active
              participation in our services
            </p>
          </div>
          <div className=" ">
            <Image
              className=" h-full w-full"
              src="/Assets/about.jpg"
              width="1028"
              height="440"
              alt="about"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

// The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services
