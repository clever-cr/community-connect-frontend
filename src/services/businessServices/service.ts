import axios from "axios"
const url = import.meta.env.VITE_URL

export const getAllServices = async(data:any) =>{
try{
const servicess = await axios.get(`${url}/service/getAll${data}`)
return servicess.data
}catch(error){
  console.log("Error",error)
}
}


export const createService = async(data: any)  =>{
  try{
const service = await axios.post(`${url}/service/create`,data)
return service.data
  }catch(error){
    console.log("error",error)
  }
}