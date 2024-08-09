"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchRecipes } from "@/lib/features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { State } from "@/lib/types";
import RecipeCard from "./RecipeCard";
import CardPlaceholder from "./CardPlaceholder";
import Button from "@/components/Button/Button";
import bgThree from "../../../assets/42930607-removebg-preview.png";
import { ScrollParallax } from "react-just-parallax";
import Pagination from "@/components/Pagination/Pagination";

export default function Recipes() {
  const dispatch = useAppDispatch();
  const state: State = useAppSelector((state) => state.recipes);
  const recipes = state.recipes;
  const pagination = state.pagination;
  const [selectedCategory, setSelectedCategory] =
    useState<string>("ICED BEVERAGES");
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories: string[] = [
    "ICED BEVERAGES",
    "HOT BEVERAGES",
    "FOOD",
    "SYRUPS",
    "ADD-INS",
  ];

  useEffect(() => {
    dispatch(
      fetchRecipes({ category: selectedCategory, page: currentPage, limit: 10 })
    );
  }, [dispatch, selectedCategory, currentPage]);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCategory = localStorage.getItem("selectedCategory");
      if (storedCategory) {
        setSelectedCategory(storedCategory);
      }
    }
  }, []);

  useEffect(() => {
    if (buttonRefs.current[focusIndex]) {
      console.log(`Setting focus to button ${focusIndex}`);
      buttonRefs.current[focusIndex]?.focus();
    }
  }, [focusIndex]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const setFocus = (index: number) => {
    setFocusIndex(index);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-16 md:mx-16 mx-4 overflow-hidden">
      <ScrollParallax isAbsolutelyPositioned>
        <>
          <img
            src={bgThree.src}
            alt=""
            className="absolute z-0 aspect-[481/519] top-52 md:top-4"
          />
        </>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned>
        <>
          <img
            src={bgThree.src}
            alt=""
            className="absolute z-0 aspect-[481/519] -bottom-[90rem] md:-bottom-96 lg:-bottom-80 right-3"
          />
        </>
      </ScrollParallax>

      <div className="relative z-10">
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
                index={index}
                setFocus={setFocus}
              />
            </div>
          ))}
        </div>
        {/* <CardPlaceholder /> */}
        {state.status === "loading" && <CardPlaceholder />}
        {state.status === "succeeded" && <RecipeCard recipes={recipes} />}
        {state.error && <p>Failed to fetch Recipes</p>}
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
