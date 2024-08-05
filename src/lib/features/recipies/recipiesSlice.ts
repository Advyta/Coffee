import { initialState } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipies/fetchRecipies",
  async (params: { id?: string; name?: string; category?: string }) => {
    const { id, name, category } = params;
    const url = new URL("/api/coffeeData", window.location.origin);
    if (id) url.searchParams.append("id", id);
    if (name) url.searchParams.append("name", name);
    if (category) url.searchParams.append("category", category);

    try {
      const response = await axios.get(url.toString());
      // console.log(response.data);
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
        state.recipes = action.payload;
        // console.log(action.payload);
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default recipesSlice.reducer;
