import React, { useEffect } from "react";
import bean1 from "@/assets/bean-1.png";
import bean2 from "@/assets/bean-2.png";
import bean3 from "@/assets/bean-3.png";
import bean4 from "@/assets/bean-4.png";
import bean5 from "@/assets/bean-5.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BreakSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "break-section",
        toggleActions: "restart pause recerse reset",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        // markers: true
      },
    });

    tl.to(".bean-1", {
      y: 0,
      rotation: 400,
    })
      .to(
        ".bean-2",
        {
          y: 100,
          rotation: -270,
        },
        0
      )
      .to(
        ".bean-3",
        {
          y: 500,
          rotation: -360,
          opacity: 0.9,
        },
        0
      )
      .to(
        ".bean-4",
        {
          y: 90,
          rotation: 270,
          opacity: 0.5,
        },
        0
      )
      .to(
        ".bean-5",
        {
          y: -200,
        },
        0
      );
  }, []);

  return (
    <div id="break-section" className="relative h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center h-[100vh]">
        <h3 className="heading-2 z-10">Sip, Savor, Repeat</h3>
      </div>
      <img
        src={bean1.src}
        alt="bean1"
        className="absolute bean-1 top-[44px] right-6 lg:right-14 h-32 w-32 md:h-64 md:w-64 lg:h-80 lg:w-80"
      />
      <img
        src={bean2.src}
        alt="bean2"
        className="absolute bean-2 top-3 md:top-0 left-5 md:left-40 h-20 w-20 sm:h-40 sm:w-40 lg:h-52 lg:w-52 opacity-95"
      />
      <img
        src={bean3.src}
        alt="bean3"
        className="absolute bean-3 left-40 md:top-[-40px] lg:left-96 h-48 w-48 md:h-64 md:w-64 opacity-70"
      />
      <img
        src={bean4.src}
        alt="bean4"
        className="absolute bean-4 
       
      top-24
      right-6
      md:right-48
      lg:top-48
      opacity-100 
      h-72 w-72"
      />
      <img
        src={bean5.src}
        alt="bean5"
        className="absolute bean-5 bottom-1 left-5 sm:bottom-[20px] lg:bottom-[80px] sm:right-3 lg:right-20 h-16 w-16 sm:h-24 sm:w-24 lg:h-36 lg:w-36"
      />
    </div>
  );
};

export default BreakSection;
