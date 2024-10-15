import axios from "axios"
const url = import.meta.env.VITE_URL
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const getAllServices = async(data:any) =>{
try{
const servicess = await axios.get(`${url}/service/getAll`)
return servicess.data
}catch(error){
  console.log("Error",error)
}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createService = async(data: any)  =>{
  try{
const service = await axios.post(`${url}/service/create`,data)
return service.data
  }catch(error){
    console.log("error",error)
  }
}