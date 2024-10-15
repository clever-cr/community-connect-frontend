/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
const url = import.meta.env.VITE_URL
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signUp  = async(data: any) =>{
  try{
    const registerUser = await axios.post(`${url}/user/signup`,data)
return registerUser.data
  }catch(error){
    console.log("Error fetching data",error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login =async(data: any) =>{
  try{
    console.log("dataa",data)
const logIn = await axios.post(`${url}/user/signin`,data)
console.log("loginnnn",logIn.data)
return logIn.data
  }catch(error)
  {
    console.log("error",error)
  }
}