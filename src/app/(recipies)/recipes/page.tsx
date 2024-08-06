"use client";

import React, { useEffect, useState } from "react";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Coffee, State } from "@/lib/types";
import RecipeCard from "./RecipeCard";
import CardPlaceholder from "./CardPlaceholder";
import Button from "@/components/Button/Button";

export default function Recipes() {
  const dispatch = useAppDispatch();
  const state: State = useAppSelector((state) => state.recipes);
  const recipes = state.recipes;
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    return localStorage.getItem("selectedCategory") || "ICED BEVERAGES";
  });

  const categories: string[] = [
    "ICED BEVERAGES",
    "HOT BEVERAGES",
    "FOOD",
    "SYRUPS",
    "ADD-INS",
  ];

  useEffect(() => {
    dispatch(fetchRecipes({ category: selectedCategory }));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-16 md:mx-16 mx-4">
      <h2 className="md:pt-6 heading-3 capitalize text-center">
        Discover the most Popular Coffee Recipies
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 p-4 justify-center">
        {categories.map((category, index) => (
          <div key={index}>
            <Button
              content={category}
              onClick={() => handleCategoryClick(category)}
              activated={selectedCategory === category}
            />
          </div>
        ))}
      </div>
      {/* <CardPlaceholder /> */}
      {state.status === "loading" && <CardPlaceholder />}
      {state.status === "succeeded" && <RecipeCard recipes={recipes} />}
      {state.error && <p>Failed to fetch Recipes</p>}
    </div>
  );
}
