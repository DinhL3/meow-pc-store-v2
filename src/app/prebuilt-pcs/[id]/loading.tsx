"use client";

import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center py-12">
      <BeatLoader color="#1d3557" />
    </div>
  );
}
