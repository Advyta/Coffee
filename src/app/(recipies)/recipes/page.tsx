"use client";

import React, { useEffect } from "react";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Coffee } from "@/lib/types";

export default function Recipes() {
  const dispatch = useAppDispatch();
  const recipes: Coffee[] = useAppSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes(""));
  }, [dispatch]);

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex justify-center items-center pt-20">Loading...</div>
    );
  } else {
    return (
      <div className="py-16 mx-16">
        <h2 className="heading-3 capitalize">
          Discover the most Popular Coffee Recipies
        </h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
