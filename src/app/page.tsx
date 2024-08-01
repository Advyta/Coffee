'use client'
import React from 'react';
import Homepage from "./(home)/Homepage";
import RecipeSection from "./(home)/RecipeSection";

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Homepage />
      <RecipeSection />
    </div>
  );
}

export default HomePage;