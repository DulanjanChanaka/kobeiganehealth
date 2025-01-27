"use client";

import React from "react";
import dynamic from "next/dynamic";

const Woman = dynamic(() => import("@/components/Woman"), {
  ssr: false,
});

export default function WomanPage() {
  return <Woman />;
}
