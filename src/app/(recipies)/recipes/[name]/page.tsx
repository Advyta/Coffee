"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrepTime from "@/components/PrepTime/PrepTime";
import coffee from "@/assets/coffee-bean.png";
import RecipeSteps from "./RecipeSteps";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchRecipes } from "@/lib/features/recipes/recipesSlice";
import cup from "@/assets/Sad-coffee-cup.png";
import bgFour from "@/assets/top-view-coffee-tamper-with-copy-space_23-2148336702.jpg";
import bgFour_mob from "@/assets/roasted-beans-tasteful-coffee-arrangement.jpg";

interface RecipePageProps {
  params: {
    name: string;
  };
}

const Recipe: React.FC<RecipePageProps> = ({ params }) => {
  const { name } = params;
  const dispatch = useAppDispatch();
  const recipeState = useAppSelector((state) => state.recipes);
  const selectedRecipe = recipeState.currentRecipe;
  const [bgImage, setBgImage] = useState(bgFour.src);
  const [aspectRatio, setAspectRatio] = useState("3 / 2");

  useEffect(() => {
    if (name) {
      dispatch(fetchRecipes({ name: name }));
    }
  }, [dispatch, name]);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgFour_mob.src);
        setAspectRatio("2 / 3");
      } else {
        setBgImage(bgFour.src);
        setAspectRatio("3 / 2");
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  const renderContent = () => {
    if (recipeState.status === "loading") {
      return (
        <p className="py-16 sm:mx-16 mx-6 flex justify-center items-center h-screen">
          Loading <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-lg"></span>
        </p>
      );
    }

    if (recipeState.status === "failed" || !selectedRecipe) {
      return (
        <div className="flex flex-col sm:flex-row py-16 sm:mx-16 mx-6 justify-center items-center h-screen gap-4">
          <img src={cup.src} alt="not found" />
          <p className="heading-3 backdrop-blur-sm rounded-xl px-3 bg-detail-text-bg">No recipe found</p>
        </div>
      );
    }

    return (
      <div className="py-16 sm:mx-16 mx-6">
        <h1 className="py-6 heading-2">{selectedRecipe.name}</h1>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 justify-center">
          <div className="basis-1/2">
            <Image
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              placeholder="empty"
              loading="lazy"
              width={2880}
              height={1660}
              className="rounded-lg"
            />
          </div>
          <div className="self-center basis-1/2 backdrop-blur-sm rounded-xl px-4 pb-4 bg-detail-text-bg max-w-xl">
            <p className="text-justify pb-3 pt-4 body-l ">
              {selectedRecipe.description}
            </p>
            <PrepTime duration={selectedRecipe.prepTime} />
          </div>
        </div>

        <div className="my-6 rounded-xl p-4 bg-detail-text-bg max-w-3xl">
          <h2 className="heading-3 italic pb-2">Ingredients</h2>
          <ul className="body-m">
            {selectedRecipe.recipeIngredient.map((item) => (
              <li
                key={item}
                style={{
                  backgroundImage: `url(${coffee.src})`,
                  backgroundSize: "18px 18px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 50%",
                  paddingLeft: "25px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <RecipeSteps steps={selectedRecipe.recipeInstructions} />
      </div>
    );
  };

  return (
    <div
      className="relative w-full bg-cover snap-y snap-mandatory overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio,
      }}
    >
      <div className="h-full overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Recipe;
