import { bookingActions } from "."
import {createBooking} from "./service"


export const createBookingAction = (data:any) => async(dispatch:any) =>{
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
