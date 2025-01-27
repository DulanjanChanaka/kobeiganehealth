"use client";

import React from "react";
import dynamic from "next/dynamic";

const Weight = dynamic(() => import("@/components/Weight"), {
  ssr: false,
});

export default function WeightPage() {
  return <Weight />;
}
