import { configureStore } from '@reduxjs/toolkit'
import newsReducer from "../redux-toolkit/newsSlice"


export const store = configureStore({
  reducer: {
    news:newsReducer
  },
})