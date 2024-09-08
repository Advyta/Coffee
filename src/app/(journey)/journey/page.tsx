"use client";
import React, { useEffect } from "react";
import { coffeeJourney } from "./JourneyContent";
import Image from "next/image";

export default function JourneySection() {
  return (
    <div className="min-h-screen mx-16 pt-16">
      <div className="">
        <h1 className="heading-1 italic">Your Coffee&#39;s Journey</h1>
      </div>
      <div>
        {coffeeJourney.map((step) => (
          <div key={step.step} className="flex flex-col py-5">
            <h2 className="heading-2 italic"><span>{step.step}. </span>{step.title}</h2>
            <div className="flex flex-col gap-4 ">
              <Image
                src={step.image.src}
                alt={step.title}
                height={step.image.height}
                width={step.image.width}
                placeholder="empty"
                loading="lazy"
                layout="responsive"
                className="img-block max-w-[600px] rounded-xl"
              />
              <pre className="body-l text-justify text-wrap">{step.text}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
