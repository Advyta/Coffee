"use client";
import React from "react";

export default function JourneySection() {
  return (
    <div className="min-h-screen mx-16">
      <div className="grid grid-cols-1 min-[475px]:grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="min-[475px]:col-span-2 flex justify-center items-center min-[475px]:grid min-[475px]:grid-cols-2 min-[475px]:gap-4 md:col-span-3 md:grid-cols-1">
          <h2 className="heading-2 capitalize">Explore the coffee Journey</h2>
        </div>
        <div className="h-auto  min-[475px]:row-start-2 min-[475px]:col-start-2 md:col-start-1 md:col-span-2">
          <div className="flex justify-center items-center relative h-full">
            <p className="body-l px-3 text-left">
              From lush plantations to your cup, coffee’s journey is a symphony
              of nature, craftsmanship, and passion.
            </p>
          </div>
        </div>
        <div className="h-auto img-block bg-white min-[475px]:row-start-2"></div>
        <div className="h-auto img-block bg-white"></div>
        <div className="h-auto img-block bg-white"></div>
        {/* <div className="col-span-2 row-span-2 bg-white aspect-square"></div> */}
        <div className="h-auto img-block bg-white md:col-start-2"></div>

        <div className="h-auto img-block bg-white"></div>
        <div className="h-auto img-block bg-white"></div>
        <div className="hidden md:inline-grid h-auto img-block bg-white"></div>
        <div className="hidden md:inline-grid h-auto img-block bg-white"></div>
        <div className="hidden md:inline-grid h-auto img-block bg-white"></div>
      </div>
    </div>
  );
}
