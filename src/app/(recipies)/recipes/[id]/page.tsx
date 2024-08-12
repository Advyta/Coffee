"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";
import Image from "next/image";
import PrepTime from "@/components/PrepTime/PrepTime";
import coffee from "@/assets/coffee-bean.png";
import RecipeSteps from "./RecipeSteps";

interface RecipePageProps {
  params: {
    id: string;
  };
}

const Recipe: React.FC<RecipePageProps> = ({ params }) => {
  const { id } = params;

  const recipes = useAppSelector((state) => state.recipes.recipes);
  const selectedRecipe = recipes.find((recipe) => recipe._id === id);
  if (!selectedRecipe)
    return <p className="py-16 sm:mx-16 mx-6">No recipe found</p>;

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
        <div className="self-center basis-1/2">
          <p className=" text-justify py-3 body-l">
            {selectedRecipe.description}
          </p>
          <PrepTime duration={selectedRecipe.prepTime} />
        </div>
      </div>

      <div className="py-6">
        <h2 className="heading-3 italic py-2">Ingredients</h2>
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

export default Recipe;
