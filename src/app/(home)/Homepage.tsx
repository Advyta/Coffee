'use client'
import React, { useEffect, useRef } from 'react'
import bgOne from '../../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg'
import gsap from 'gsap';

export default function Homepage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current, {opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 1.5, ease: 'power3.out'}
    ).fromTo(
      subtitleRef.current, {opacity: 0, y: 40}, {opacity: 1, y:0, duration: 1.5, ease: 'power3.out'}, '-=1'
    )
  }, []);

  return (
    <div style={{ backgroundImage: `url(${bgOne.src})` }} className='bg-cover w-full aspect-bg-1 relative'>
      <div className="flex md:justify-end justify-center">
        <div>
          <h1 ref={titleRef} className='page-title md:mt-36 md:mr-16 mt-2 '>Coffee Creations</h1>
          <p ref={subtitleRef} className='heading-3 italic'>Create Happiness</p>
        </div>
      </div>
    </div>
  )
}
