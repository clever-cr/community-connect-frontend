
import axios from "axios";
const url = import.meta.env.VITE_URL
export const signUp  = async(data: any) =>{
  try{
    const registerUser = await axios.post(`${url}/user/signup`,data)
return registerUser.data
  }catch(error){
    console.log("Error fetching data",error)
  }
}


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