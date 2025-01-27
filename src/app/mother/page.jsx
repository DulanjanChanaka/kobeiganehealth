"use client";

import React from "react";
import dynamic from "next/dynamic";

const Mother = dynamic(() => import("@/components/Mother"), { ssr: false });

export default function MotherPage() {
  return <Mother />;
}
