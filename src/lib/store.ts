import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from './features/recipies/recipiesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: recipesReducer,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore;