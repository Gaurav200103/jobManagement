import { configureStore } from "@reduxjs/toolkit";
import jobRecuder from "./jobSlice";



export const storage = configureStore({
  reducer:{
    jobRecuder
  }
})