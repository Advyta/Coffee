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
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "0", 10);

    let query: any = {};
    if (id) {
      query._id = id;
    }
    if (name) {
      query.name = new RegExp(name, "i");
    }
    if (category.length > 0) {
      query.category = { $in: category };
    }

    let coffeeData;
    if (limit > 0) {
      const skip = (page - 1) * limit;
      coffeeData = await CoffeeRecipe.find(query).skip(skip).limit(limit);
    } else {
      coffeeData = await CoffeeRecipe.find(query);
    }

    // const skip = (page - 1) * limit;
    // const coffeeData = await CoffeeRecipe.find(query).skip(skip).limit(limit);
    const totalItems = await CoffeeRecipe.countDocuments(query);
    const totalPages = limit > 0 ? Math.ceil(totalItems / limit) : 1;

    return NextResponse.json(
      {
        data: coffeeData,
        pagination: {
          totalItems,
          totalPages,
          currentPage: page,
          itemsPerPage: limit > 0 ? limit : totalItems,
        },
      },
      { status: 200 }
    );
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
