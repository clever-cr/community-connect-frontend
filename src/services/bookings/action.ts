import { bookingActions } from "."
import {createBooking} from "./service"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = (data:any) => async(dispatch:any) =>{
  try{
    dispatch(bookingActions.setIsLoading(true))
    const response = await createBooking(data)
    if(response){
      dispatch(bookingActions.setIsLoading(false))
    }
  }catch(error){
    console.log("Error",error)
  }
}