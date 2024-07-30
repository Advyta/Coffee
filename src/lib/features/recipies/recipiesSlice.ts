import { initialState } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchRecipes = createAsyncThunk('recipies/fetchRecipies', async (id: string | null) => {
  const options = {
    method: 'GET',
    url: 'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
    params: {
      id: `${id}` || null,
      name: '',
      category: '',
    },
    headers: {
      'x-rapidapi-key': 'ef449b63a2mshcc35d86c6df7536p1a0980jsn584ee2e6c6fe',
      'x-rapidapi-host': 'starbucks-coffee-db2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
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