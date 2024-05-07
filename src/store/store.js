import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "../store/bucketSlice";

export const store = configureStore({
  reducer: bucketReducer,
});
