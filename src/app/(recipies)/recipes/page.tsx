"use client";

import React, { useEffect } from "react";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Coffee, State } from "@/lib/types";
import RecipeCard from "./RecipeCard";
import CardPlaceholder from "./CardPlaceholder";

export default function Recipes() {
  const dispatch = useAppDispatch();
  const state: State = useAppSelector((state) => state.recipes);
  const recipes = state.recipes;

  useEffect(() => {
    dispatch(fetchRecipes({ category: "ICED BEVERAGES" }));
  }, [dispatch]);

  return (
    <div className="py-16 md:mx-16 mx-4">
      <h2 className="md:pt-6 heading-3 capitalize text-center">
        Discover the most Popular Coffee Recipies
      </h2>
      {/* <CardPlaceholder /> */}
      {state.status === "loading" && <CardPlaceholder />}
      {state.status === "succeeded" && <RecipeCard recipes={recipes} />}
      {state.error && <p>Failed to fetch Recipes</p>}
    </div>
  );
}
