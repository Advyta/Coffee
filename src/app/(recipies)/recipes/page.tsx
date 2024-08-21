"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fetchRecipes,
  setCategory,
  setPage,
} from "@/lib/features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { State } from "@/lib/types";
import RecipeCard from "./RecipeCard";
import CardPlaceholder from "./CardPlaceholder";
import Button from "@/components/Button/Button";
import bgThree from "../../../assets/42930607-removebg-preview.png";
import { ScrollParallax } from "react-just-parallax";
import Pagination from "@/components/Pagination/Pagination";

export default function Recipes() {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const state: State = useAppSelector((state) => state.recipes);
  const recipes = state.recipes;
  const pagination = state.pagination;
  const selectedCategory = state.selectedCategory;
  const searchParams = useSearchParams();
  const router = useRouter();

  const [focusIndex, setFocusIndex] = useState<number>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const categories: string[] = [
    "ICED BEVERAGES",
    "HOT BEVERAGES",
    "FOOD",
    "SYRUPS",
    "ADD-INS",
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedCategory = searchParams.get("category");
      const storedPage = searchParams.get("page");

      const category = storedCategory || "ICED BEVERAGES";
      const page = storedPage ? parseInt(storedPage, 10) : 1;

      dispatch(setCategory(category));
      dispatch(setPage(page));

      router.replace(
        `/recipes?category=${encodeURIComponent(category)}&page=${page}`
      );
    }
  }, [isClient, searchParams]);

  useEffect(() => {
    dispatch(
      fetchRecipes({
        category: selectedCategory,
        page: pagination.currentPage,
        limit: 10,
      })
    );
  }, [dispatch, selectedCategory, pagination.currentPage]);

  useEffect(() => {
    if (buttonRefs.current[focusIndex]) {
      console.log(`Setting focus to button ${focusIndex}`);
      buttonRefs.current[focusIndex]?.focus();
    }
  }, [focusIndex]);

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
    router.replace(`/recipes?category=${encodeURIComponent(category)}&page=1`);
  };

  const setFocus = (index: number) => {
    setFocusIndex(index);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    router.replace(
      `/recipes?category=${encodeURIComponent(selectedCategory)}&page=${page}`
    );
  };

  return (
    <div className="py-16 md:mx-16 mx-4 overflow-hidden min-h-screen">
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
