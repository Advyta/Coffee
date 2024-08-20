import { Coffee, State } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: State = {
  recipes: [],
  status: "idle",
  currentRecipe: null,
  selectedCategory: "ICED BEVERAGES",
  pagination: {
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    itemsPerPage: 10,
  },
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (params: {
    id?: string;
    name?: string;
    category?: string;
    page?: number;
    limit?: number;
  }) => {
    const { id, name, category, page, limit } = params;
    let url = new URL("/api/coffeeData", window.location.origin);

    if (id) url.searchParams.append("id", id);
    if (name) url.searchParams.append("name", decodeURIComponent(name));
    if (category) url.searchParams.append("category", category);
    if (page) url.searchParams.append("page", page.toString());
    if (limit) url.searchParams.append("limit", limit.toString());

    try {
      const response = await axios.get(url.toString());
      if (!response.data) {
        throw new Error("No data found in the response");
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";

        const decodedName = action.meta.arg.name
          ? decodeURIComponent(action.meta.arg.name)
          : null;

        if (decodedName) {
          state.currentRecipe =
            action.payload.data.find(
              (recipe: Coffee) => recipe.name === decodedName
            ) || null;
        } else if (action.meta.arg.id) {
          state.currentRecipe = action.payload.data[0] || null;
        } else {
          state.recipes = action.payload.data || [];
          state.pagination = action.payload.pagination || {
            totalItems: 0,
            totalPages: 1,
            currentPage: 1,
            itemsPerPage: 10,
          };
        }
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});
export const { setCategory, setPage } = recipesSlice.actions;
export default recipesSlice.reducer;
