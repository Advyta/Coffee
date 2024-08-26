"use client";
import React, { useEffect, useRef } from "react";
import planting from "@/assets/coffee-production/planting.png";
import harvesting from "@/assets/coffee-production/harvesting.jpg";
import processing from "@/assets/coffee-production/processing.png";
import drying from "@/assets/coffee-production/drying.png";
import grading from "@/assets/coffee-production/grading.jpg";
import exporting from "@/assets/coffee-production/exporting.jpeg";
import roasting from "@/assets/coffee-production/roasting.png";
import grinding from "@/assets/coffee-production/grinding.png";
import brewing from "@/assets/coffee-production/brewing.png";
import cup from "@/assets/coffee-production/Cup-Of-Creamy-Coffee.png";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const router = useRouter();

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = () => {
    router.push("/journey");
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRefs.current[0],
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    imgRefs.current.forEach((ref, index) => {
      if (ref) {
        tl.fromTo(
          ref,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power3.out", delay: index * 0.1 } // Sequential animation with 0.3s delay between each
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-16 my-4">
      <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="min-[540px]:col-span-2 flex justify-center items-center min-[540px]:grid min-[540px]:grid-cols-2 min-[540px]:gap-4 md:col-span-3 md:grid-cols-1">
          <h2 className="heading-2 capitalize">Explore the coffee Journey</h2>
        </div>
        <div className="h-auto min-[540px]:row-start-2 min-[540px]:col-start-2 md:col-start-1 md:col-span-2">
          <div className="flex flex-col justify-center relative h-full">
            <p className="body-l px-3 py-2 text-left">
              From lush plantations to your cup, coffee’s journey is a symphony
              of nature, craftsmanship, and passion.
            </p>
            <div className="flex justify-start px-3">
              <Button content="Read more" onClick={handleClick} />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            imgRefs.current[0] = el;
          }}
          className="h-auto img-block min-[540px]:row-start-2"
        >
          <img src={planting.src} alt="planting" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[1] = el;
          }}
          className="h-auto img-block"
        >
          <img src={harvesting.src} alt="harvesting" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[2] = el;
          }}
          className="h-auto img-block"
        >
          <img src={processing.src} alt="processing" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[3] = el;
          }}
          className="h-auto img-block md:col-start-2"
        >
          <img src={drying.src} alt="drying" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[4] = el;
          }}
          className="h-auto img-block"
        >
          <img src={grading.src} alt="grading" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[5] = el;
          }}
          className="h-auto img-block"
        >
          <img src={exporting.src} alt="exporting" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[6] = el;
          }}
          className="hidden md:inline-grid h-auto img-block"
        >
          <img src={roasting.src} alt="roasting" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[7] = el;
          }}
          className="hidden md:inline-grid h-auto img-block"
        >
          <img src={grinding.src} alt="grinding" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[8] = el;
          }}
          className="hidden md:inline-grid h-auto img-block"
        >
          <img src={brewing.src} alt="brewing" className="rounded-lg" />
        </div>
        <div
          ref={(el) => {
            imgRefs.current[9] = el;
          }}
          className="hidden md:inline-grid h-auto img-block"
        >
          <img src={cup.src} alt="cup of coffee" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
