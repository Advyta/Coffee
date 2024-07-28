'use client';
import React, { useEffect, useRef, useState } from 'react';
import bgOne from '../../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg';
import bgtwo from '../../assets/istockphoto-1467199120-2048x20481.jpg';
import gsap from 'gsap';

export default function Homepage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [bgImage, setBgImage] = useState(bgOne.src);
  const [aspectRatio, setAspectRatio] = useState('16 / 9');

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgtwo.src);
        setAspectRatio('3 / 4');
      } else {
        setBgImage(bgOne.src);
        setAspectRatio('16 / 9');
      }
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);

    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, '-=1'
    )
  }, []);

  return (
    <div className="relative w-full bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/15 bg-gradient-to-b from-transparent to-background"></div>
      <div className="flex md:justify-end justify-center relative z-10">
        <div className='md:mt-36 md:mr-16 mt-24 mr-5 grid'>
          <h1 ref={titleRef} className='page-title justify-self-center'>Coffee Creations</h1>
          <p ref={subtitleRef} className='heading-3 italic justify-self-center'>Create Happiness</p>
        </div>
      </div>
    </div>
  );
}