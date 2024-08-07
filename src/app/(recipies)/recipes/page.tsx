"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Coffee, State } from "@/lib/types";
import RecipeCard from "./RecipeCard";
import CardPlaceholder from "./CardPlaceholder";
import Button from "@/components/Button/Button";
import bgThree from "../../../assets/42930607-removebg-preview.png";
import gsap from "gsap";

export default function Recipes() {
  const dispatch = useAppDispatch();
  const state: State = useAppSelector((state) => state.recipes);
  const recipes = state.recipes;
  const [selectedCategory, setSelectedCategory] =
    useState<string>("ICED BEVERAGES");
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const setFocus = (index: number) => {
    setFocusIndex(index);
  };

  return (
    <div className="py-16 md:mx-16 mx-4 overflow-hidden">
      <div
        // ref={bgRef}
        className="sticky"
        style={{
          backgroundImage: `url(${bgThree.src})`,
          backgroundRepeat: "no-repeat",
          aspectRatio: "481/519",
        }}
      >
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
        </div>
      </div>
    </div>
  );
}
