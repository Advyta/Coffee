'use client'
import React, { useEffect, useState } from 'react'
import bgTwo from '../../assets/StockSnap_KJADY7BD18_.jpg'
import bgTwo_mob from '../../assets/pexels-jamalyahyayev-4085294.jpg'
import { StarbucksCoffee } from '@/lib/StarbucksCoffee';
import { Coffee } from '@/lib/types';

const selectedRecipes: {
  id: string
}[] = [
    { id: '6681b8d94507f78afe801843'},
    { id: '6681b8d94507f78afe80186d'},
    { id: '6681b8d94507f78afe80183a'},
    { id: '6681b8d94507f78afe801848'},
  ]

function RecipeSection() {
  const [bgImage, setBgImage] = useState(bgTwo.src);
  const [aspectRatio, setAspectRatio] = useState('16 / 9');
  const [recipes, setRecipes] = useState<Coffee[]>([])

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
    const displayRecipes: Coffee[] = selectedRecipes.map((recipe) => {
      return StarbucksCoffee.find((coffee) => coffee._id === recipe.id);
    }).filter(Boolean) as Coffee[];
    setRecipes(displayRecipes);
  }, [])

  return (
    <div className='relative w-full bg-cover snap-y snap-mandatory overflow-hidden'
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio,
        height: '100vh'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-background to-transparent"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent to-background"></div> */}
      <div className='flex flex-col w-full h-full overflow-y-auto'>
        <div className='flex text-center items-center mt-14 md:mt-48 lg:mt-16 justify-center'>
          <h2 className='heading-2 mx-4 md:mx-16 px-3 py-2 rounded-xl capitalize backdrop-blur-lg bg-background-40'>Discover our most Popular Coffee Recipes</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-5 p-4'>
          {recipes.map((recipe) => (
            <div key={recipe._id} className='justify-self-center'>
              <div className='flex flex-col gap-4 lg:gap-8 sm:flex-row bg-background-40 backdrop-blur-sm px-8 py-6 md:px-16 md:py-10 rounded-xl max-w-xl justify-center'>
                <div className=' flex justify-center'>
                  <img src={recipe.image} alt={recipe.name} className='rounded-full w-24 sm:w-28 md:w-40 lg:w-60 xl:w-80' />
                </div>
                <div className='flex items-center'>
                  <h3 className='body-l text-center'>{recipe.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeSection