'use client'

import React, { useEffect } from 'react'
import { fetchRecipes } from '@/lib/features/recipies/recipiesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Recipes() {

  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes(''));
  }, [dispatch])

  return (
    <div className='py-16 mx-16'>
      <h2 className='heading-3 capitalize'>Discover the most Popular Coffee Recipies</h2>
      <ul>
        {recipes.map((recipe: { id: number; name: string }) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  )
}
