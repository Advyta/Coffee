import Button from "@/components/Button/Button";
import { Coffee } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface RecipeCardProps {
  recipes: Coffee[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipes }) => {
  const pathname = usePathname();
  const router =useRouter();

  const handleReadRecipeClick = (recipeId: string) => {
    router.push(`/recipe/${recipeId}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-5 p-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="justify-self-center">
          <div className={`flex flex-col gap-4 lg:gap-8 sm:flex-row px-8 py-6 lg:px-14 md:py-9 rounded-3xl max-w-xl justify-center ${pathname === '/' ? 'bg-background-40 backdrop-blur-sm' :  'bg-card-bg'}`}>
            <div className=" flex justify-center sm:basis-1/2">
              <Image
                src={recipe.image}
                alt={recipe.name}
                loading="lazy"
                layout="responsive"
                width={2880}
                height={1660}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between items-center md:py-4 sm:basis-1/2">
              <h3 className="body-l text-center">{recipe.name}</h3>
              <Button content={"Read The Recipe"} onClick={() => handleReadRecipeClick(recipe._id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;