
import { notification } from "antd";
import { authenticationActions } from ".";
import { signUp,login } from "./service";



export const register = (data:any) => async(dispatch:any)=>{
  try{
dispatch(authenticationActions.setIsLoading(true))
const response = await signUp(data)
if(response){
  dispatch(authenticationActions.setIsLoading(false))
}
  }catch(error){
console.log("error",error)
  }
}

export const logIn =(data:any) => async(dispatch:any) =>{
try{
  dispatch (authenticationActions.setIsLoading(true))
  const response = await login(data)
  console.log("response",response)
  if(response.status === 200){
    dispatch(authenticationActions.setUser(response))
    dispatch(authenticationActions.setIsLoading(false))
    notification.success({message:"login successfully"})
  }else if(!response){
    notification.error({message:"invalid credentials"})
  }
}catch(error){
  console.log("Error",error)
}
}