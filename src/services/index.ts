import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication"

const store = configureStore({
  reducer:{
    authentication: authenticationSlice
  }
})
export default store