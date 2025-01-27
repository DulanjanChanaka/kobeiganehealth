"use client";

import React from "react";
import dynamic from "next/dynamic";

const TelePhone = dynamic(() => import("@/components/TelePhone"), {
  ssr: false,
});

export default function TelePhonePage() {
  return <TelePhone />;
}
