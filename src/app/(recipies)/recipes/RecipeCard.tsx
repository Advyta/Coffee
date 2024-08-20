import Button from "@/components/Button/Button";
import { Coffee } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PrepTime from "@/components/PrepTime/PrepTime";
import { useAppSelector } from "@/lib/hooks";

interface RecipeCardProps {
  recipes: Coffee[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipes }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { selectedCategory, currentPage } = useAppSelector((state) => ({
    selectedCategory: state.recipes.selectedCategory,
    currentPage: state.recipes.pagination.currentPage,
  }));

  const handleReadRecipeClick = (recipeName: string) => {
    const encodedName = encodeURIComponent(recipeName);
    router.push(
      `/recipes/${encodedName}?category=${encodeURIComponent(
        selectedCategory
      )}&page=${currentPage}`
    );
    console.log("Navigating to recipe:", encodedName);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-5 p-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="justify-self-center">
          <div
            className={`flex flex-col gap-4 lg:gap-8 sm:flex-row px-8 py-6 lg:px-14 md:py-9 rounded-3xl max-w-xl justify-center backdrop-blur-sm ${
              pathname === "/" ? "bg-background-40 " : "bg-card-bg"
            }`}
          >
            <div className=" flex justify-center sm:basis-1/2">
              <Image
                src={recipe.image}
                alt={recipe.name}
                loading="lazy"
                width={2880}
                height={1660}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between items-center md:py-2 sm:basis-1/2">
              <h3 className="body-l text-center">{recipe.name}</h3>
              <div>
                <PrepTime duration={recipe.prepTime} />
              </div>
              <Button
                content={"Read The Recipe"}
                onClick={() => handleReadRecipeClick(recipe.name)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
