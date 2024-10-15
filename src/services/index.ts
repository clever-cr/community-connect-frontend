import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication"
import  serviceSlice  from "./businessServices";
const store = configureStore({
  reducer:{
    authentication: authenticationSlice,
    service:serviceSlice
  }
})
export default store