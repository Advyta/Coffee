"use client";
import React from "react";
import Homepage from "./(home)/Homepage";
import RecipeSection from "./(home)/RecipeSection";
import BreakSection from "./(home)/BreakSection";
import JourneySection from "./(home)/JourneySection";

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Homepage />
      <RecipeSection />
      <BreakSection />
      <JourneySection/>
    </div>
  );
};

export default HomePage;
