"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { RootState } from "@/lib/store";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";

interface RecipePageProps {
  params: {
    id: string;
  };
}

const Recipe: React.FC<RecipePageProps> = ({ params }) => {
  const { id } = params;
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state: RootState) =>
    state.recipes.recipes.find((recipe) => recipe._id === id)
  );
  const status = useAppSelector((state: RootState) => state.recipes.status);
  const error = useAppSelector((state: RootState) => state.recipes.error);
  console.log(recipe);

  useEffect(() => {
    dispatch(fetchRecipes({ id }));
  }, [dispatch, id]);

  // if (status === "loading") {
  //   return <div className="py-16 md:mx-16 mx-4">Loading...</div>;
  // }

  // if (status === "failed") {
  //   return <div className="py-16 md:mx-16 mx-4">Error: {error}</div>;
  // }

  if (!recipe) {
    return <div className="py-16 md:mx-16 mx-4">Recipe not found</div>;
  }

  return (
    <div className="py-16 md:mx-16 mx-4">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Recipe;
