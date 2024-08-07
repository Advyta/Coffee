import React from "react";

interface RecipePageProps {
  params: {
    id: string;
  };
}

const Recipe: React.FC<RecipePageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div className="py-16 md:mx-16 mx-4">
      <h1>Recipe ID: {id}</h1>
    </div>
  );
};

export default Recipe;
