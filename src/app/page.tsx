"use client";
import React from "react";
import Homepage from "./(home)/Homepage";
import RecipeSection from "./(home)/RecipeSection";
import Footer from "@/components/Footer/Footer";
import BreakSection from "./(home)/BreakSection";

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Homepage />
      <RecipeSection />
      <BreakSection />
    </div>
  );
};

export default HomePage;
