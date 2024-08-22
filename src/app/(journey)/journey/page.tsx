"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    });
  }, []);

  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <div className={`flex items-center justify-center h-screen journey`}>
          <h1 className="text-6xl font-bold ">{i + 1}</h1>
        </div>
      ))}
    </div>
  );
}
