import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipes/recipesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      recipes: recipesReducer,
    },
  });
};

const store = makeStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
