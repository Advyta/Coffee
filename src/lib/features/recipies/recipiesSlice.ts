import { initialState } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchRecipes = createAsyncThunk('recipies/fetchRecipies', async (id: string | null) => {
  const options = {
    method: 'GET',
    url: '/api/coffeeData',
  };
  
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
  }
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default recipesSlice.reducer;