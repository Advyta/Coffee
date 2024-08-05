import { connect } from "@/dbConfig/dbConfig";
import CoffeeRecipe from "@/models/RecipeSchema";
import { NextRequest, NextResponse } from "next/server";

// Handler for GET request
export async function GET(req: NextRequest) {
  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const category = searchParams.getAll("category");

    let query: any = {};
    if (id) {
      query._id = id;
    }
    if (name) {
      query.name = new RegExp(name, "i");
    }
    if (category) {
      query.category = category;
    }

    const coffeeData = await CoffeeRecipe.find(query);

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
