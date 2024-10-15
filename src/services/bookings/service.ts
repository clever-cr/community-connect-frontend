import axios from "axios";
const url = import.meta.env.VITE_URL
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const createBooking = async(data:any) =>{
  try{
const create = await axios.post(`${url}/booking/create`,data)
return create.data
  }catch(error){
    console.log("error",error)
  }
}