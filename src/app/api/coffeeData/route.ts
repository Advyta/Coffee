import { connect } from "@/dbConfig/dbConfig";
import CoffeeRecipe from "@/models/RecipeSchema";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

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
    console.log("Received ID:", id);

    let query: any = {};
    if (id) {
      query._id = id.trim();
    }
    if (name) {
      query.name = new RegExp(name, "i");
    }
    if (category.length > 0) {
      query.category = { $in: category };
    }

    console.log("Querying with:", query);

    let coffeeData;
    if (limit > 0) {
      const skip = (page - 1) * limit;
      coffeeData = await CoffeeRecipe.find(query).skip(skip).limit(limit);
    } else {
      coffeeData = await CoffeeRecipe.find(query);
    }

    console.log("Database Response:", coffeeData);

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
