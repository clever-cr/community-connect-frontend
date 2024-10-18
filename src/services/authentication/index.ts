import {createSlice} from "@reduxjs/toolkit"

const authenticationSlice = createSlice ({
  name:"authentication",
  initialState:{
    isLoading:false,
    all:null,
    updated:null,
    selected:null,
    user:null,
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
    },
    setUser(state, action){
      state.user = action.payload
    }
  }
})
export const authenticationActions = authenticationSlice.actions
export default authenticationSlice.reducer