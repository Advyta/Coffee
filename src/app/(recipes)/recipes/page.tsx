"use client";
import React, { Suspense } from "react";
import Recipes from "./Recipes";

export default function RecipesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Recipes />
    </Suspense>
  );
}
