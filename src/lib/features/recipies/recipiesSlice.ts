import { initialState } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipies/fetchRecipies",
  async (params: { id?: string; name?: string; category?: string, page?: number, limit?: number  }) => {
    const { id, name, category, page, limit } = params;
    const url = new URL("/api/coffeeData", window.location.origin);
    if (id) {
      // Fetch a single recipe by ID
      url.pathname = `/api/coffeeData/${id}`;
    } else {
      // Fetch recipes with filters
      if (name) url.searchParams.append("name", name);
      if (category) url.searchParams.append("category", category);
      if (page) url.searchParams.append("page", page.toString());
      if (limit) url.searchParams.append("limit", limit.toString());
    }

    try {
      const response = await axios.get(url.toString());
      if (!response.data) {
        throw new Error('No data found in the response');
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload.data;
        state.pagination = action.payload.pagination || { totalItems: 0, totalPages: 1, currentPage: 1, itemsPerPage: 10 };
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default recipesSlice.reducer;
