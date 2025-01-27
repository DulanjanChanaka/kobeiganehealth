"use client";

import React from "react";
import dynamic from "next/dynamic";

const Threeposha = dynamic(() => import("@/components/Threeposha"), {
  ssr: false,
});

export default function ThreeposhaPage() {
  return <Threeposha />;
}
