"use client";

import dynamic from "next/dynamic";

const Medical = dynamic(() => import("@/components/Medical"), { ssr: false });

export default function MedicalPage() {
  return <Medical />;
}
