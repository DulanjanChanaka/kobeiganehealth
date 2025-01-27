"use client";

import React from "react";
import dynamic from "next/dynamic";

const Moh = dynamic(() => import("@/components/Moh"), { ssr: false });

export default function MohPage() {
  return <Moh />;
}
