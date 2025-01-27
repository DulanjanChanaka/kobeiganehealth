"use client";

import dynamic from "next/dynamic";

const Hospital = dynamic(() => import("@/components/Hospital"), { ssr: false });

export default function HospitalPage() {
  return <Hospital />;
}
