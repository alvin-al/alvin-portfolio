import React from "react";
import Homepage from "@/components/pages/Homepage";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className='flex p-4 flex-col !scroll-smooth'>
      <Homepage />
      <Analytics />
    </div>
  );
}
