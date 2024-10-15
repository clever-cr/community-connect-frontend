import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name:"booking",
  initialState:{
    isLoading:false,
    all:null,
    updated:null,
    selected:null
  },
  reducers:{
    setAll(state, action){
      state.all = action.payload
    },
    setUpdated(state,action){
      state.updated = action.payload
    },
    setSelected(state,action){
      state.selected = action.payload
    },
    setIsLoading(state, action){
      state.isLoading = action.payload
    }
  }

})
export const bookingActions = bookingSlice.actions
export default bookingSlice.reducer