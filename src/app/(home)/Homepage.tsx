'use client'
import React, { useEffect, useRef, useState } from 'react'
import bgOne from '../../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg'
import bgtwo from '../../assets/istockphoto-1467199120-2048x20481.jpg'
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

    // Clean up the event listener on component unmount
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
    <div className="bg-cover w-full relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio
      }}
    >
      <div className="flex justify-end ">
        <div className=' md:mt-36 md:mr-16 mt-20 mr-5'>
          <h1 ref={titleRef} className='page-title'>Coffee Creations</h1>
          <p ref={subtitleRef} className='heading-3 italic'>Create Happiness</p>
        </div>
      </div>
    </div>
  )
}
