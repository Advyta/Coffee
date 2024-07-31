'use client'
import React, { useEffect, useState } from 'react'
import bgTwo from '../../assets/StockSnap_KJADY7BD18_.jpg'
import bgTwo_mob from '../../assets/pexels-jamalyahyayev-4085294.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { StarbucksCoffee } from '@/lib/StarbucksCoffee';

const selectedRecipes: {
  id: string
  offset: number
}[] = [
    { id: '6681b8d94507f78afe801843', offset: 0 },
    { id: '6681b8d94507f78afe80186d', offset: 1 },
    { id: '6681b8d94507f78afe80183a', offset: 2 },
    { id: '6681b8d94507f78afe801848', offset: 3 },
  ]

function RecipeSection() {
  const [bgImage, setBgImage] = useState(bgTwo.src);
  const [aspectRatio, setAspectRatio] = useState('16 / 9');

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgTwo_mob.src)
        setAspectRatio('3/4')
      } else {
        setBgImage(bgTwo.src)
        setAspectRatio('16 / 9');
      }
    }
    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => {
      window.removeEventListener('resize', updateBackground)
    }
  }, [])

  useEffect(() => {
    const displayRecipes = selectedRecipes.forEach((recipe) => StarbucksCoffee.find((coffeeId) => coffeeId._id === recipe.id))
  }, [])

  return (
    <div className='relative w-full bg-cover snap-center snap-always'
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-background to-transparent"></div>

      <Parallax pages={4} className='flex md:flex-row flex-col snap-y'>

        <ParallaxLayer sticky={{ start: 0, end: 4 }} className='flex items-center basis-1/2'>
          <h2 className='heading-2 mx-16 px-3 py-2 rounded-xl capitalize backdrop-blur-sm bg-background-35'>Discover the most Popular Coffee Recipes</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.5} className='flex text-center items-center md:justify-end  snap-normal snap-start'>
          <div className='bg-background-35 w-72 px-16 py-28 md:mr-20'>
            Card 1
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5} className='flex text-center items-center md:justify-end  snap-normal snap-start'>
          <div className='bg-background-35 w-72 px-16 py-28 md:mr-20'>
            Card 2
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5} className='flex text-center items-center md:justify-end snap-normal snap-start'>
          <div className='bg-background-35 w-72 px-16 py-28 md:mr-20'>
            Card 3
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.5} className='flex text-center items-center md:justify-end  snap-normal snap-start'>
          <div className='bg-background-35 w-72 px-16 py-28 md:mr-20'>
            Card 4
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default RecipeSection