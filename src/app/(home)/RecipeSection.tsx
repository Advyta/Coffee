"use client";
import React, { useEffect, useRef, useState } from "react";
import bgTwo from "../../assets/StockSnap_KJADY7BD18_.jpg";
import bgTwo_mob from "../../assets/pexels-jamalyahyayev-4085294.jpg";
import { Coffee } from "@/lib/types";
import gsap from "gsap";
import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchRecipes } from "@/lib/features/recipies/recipiesSlice";
import CardPlaceholder from "../(recipies)/recipes/CardPlaceholder";
import RecipeCard from "../(recipies)/recipes/RecipeCard";

const selectedRecipes: string[] = [
  "6681b8d94507f78afe801843",
  "6681b8d94507f78afe80186d",
  "6681b8d94507f78afe80183a",
  "6681b8d94507f78afe801848",
];

function RecipeSection() {
  const [bgImage, setBgImage] = useState(bgTwo.src);
  const [aspectRatio, setAspectRatio] = useState("16 / 9");
  const [recipes, setRecipes] = useState<Coffee[]>([]);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  const dispatch = useAppDispatch();
  const {
    status,
    recipes: fetchedRecipes,
    error,
  } = useAppSelector((state) => state.recipes);
  // console.log(fetchedRecipes);

  useEffect(() => {
    dispatch(fetchRecipes({ category: "ICED BEVERAGES" }));
  }, [dispatch]);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgTwo_mob.src);
        setAspectRatio("3/4");
      } else {
        setBgImage(bgTwo.src);
        setAspectRatio("16 / 9");
      }
    };
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  useEffect(() => {
    if (fetchedRecipes.length > 0) {
      const displayRecipes: Coffee[] = fetchedRecipes.filter((recipe) =>
        selectedRecipes.includes(recipe._id)
      );
      setRecipes(displayRecipes);
    }
  }, [fetchedRecipes]);

  // console.log(findRecipes);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            tl.fromTo(
              headingRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1.5, ease: "power2.in" }
            ).fromTo(
              cardRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1.5, ease: "power1.in" },
              "-=0.8"
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-cover snap-y snap-mandatory overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        aspectRatio: aspectRatio,
        height: "100vh",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-background to-transparent"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent to-background"></div> */}
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <div className="flex text-center items-center mt-14 md:mt-48 lg:mt-16 justify-center">
          <h2
            ref={headingRef}
            className="heading-2 mx-4 md:mx-16 px-5 py-2 rounded-xl capitalize backdrop-blur-lg bg-background-40"
          >
            Discover our most Popular Coffee Recipes
          </h2>
        </div>

        <div ref={cardRef}>
          <RecipeCard recipes={recipes} />
          {error && <p>Failed to fetch Recipes</p>}
        </div>

        {/* <div
          ref={cardRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-5 p-4"
        >

          {recipes.map((recipe) => (
            <div key={recipe._id} className="justify-self-center">
              <div className="flex flex-col gap-4 lg:gap-8 sm:flex-row bg-background-40 backdrop-blur-sm px-8 py-6 lg:px-14 md:py-9 rounded-xl max-w-xl justify-center">
                <div className=" flex justify-center sm:basis-1/2">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="rounded-full w-24 sm:w-28 md:w-40 lg:w-60 xl:w-80 aspect-[144/83]"
                  />
                </div>
                <div className="flex flex-col justify-between items-center md:py-4 sm:basis-1/2">
                  <h3 className="body-l text-center">{recipe.name}</h3>
                  <Button content={"Read The Recipe"} />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default RecipeSection;
