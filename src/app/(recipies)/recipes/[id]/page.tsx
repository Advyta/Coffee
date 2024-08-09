"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { RootState } from "@/lib/store";
import { fetchRecipes } from "@/lib/features/recipes/recipesSlice";

interface RecipePageProps {
  params: {
    id: string;
  };
}

const Recipe: React.FC<RecipePageProps> = ({ params }) => {
  const { id } = params;
 
const recipes = useAppSelector((state) => state.recipes.recipes)
const selectedRecipe = recipes.find((recipe) => recipe._id === id)
if (!selectedRecipe) return <p className="py-16 md:mx-16 mx-4">No recipe found</p>;
  
    return (
      <div className="py-16 md:mx-16 mx-4">
        <h1>{selectedRecipe.name}</h1>
        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
        <p>{selectedRecipe.description}</p>
      </div>
    );
  
};

export default Recipe;
