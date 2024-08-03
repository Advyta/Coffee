import { connect } from "@/dbConfig/dbConfig";
import CoffeeRecipe from "@/models/RecipeSchema";
import { NextRequest, NextResponse } from "next/server";

// Handler for GET request
export async function GET(req: NextRequest) {
  try {
    await connect();
    const coffeeData = await CoffeeRecipe.find({});
    // console.log(coffeeData);
    
    return NextResponse.json(coffeeData, { status: 200 });
  } catch (error) {
    console.error("Error fetching coffee data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handler for other HTTP methods
export async function OTHER(req: NextRequest) {
  return NextResponse.json(
    { error: `Method ${req.method} Not Allowed` },
    { status: 405, headers: { Allow: "GET" } }
  );
}
