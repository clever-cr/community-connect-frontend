import axios from "axios";
const url = import.meta.env.VITE_URL

export const createBooking = async(data:any) =>{
  try{
const create = await axios.post(`${url}/booking/create`,data)
return create.data
  }catch(error){
    console.log("error",error)
  }
}
export const getBookings = async(id:string)=>{
  try{
const getAllBookings = await axios.get(`${url}/${id}`)
return getAllBookings.data
  }catch(error){
    console.log("error",error)
  }
}