import { Link } from "react-router-dom"
import Input from "../ui/Input"
import { useDispatch} from "react-redux"
import { logIn } from "../services/authentication/action" 
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"
const Login = () =>{
const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async(event:any)=>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    await logIn(formValues)(dispatch)
    navigate("/services")
  } 

  return (
    <>



    <div className="flex flex-col items-center pt-28">
    <h1 className="text-bold text-3xl leading-10 text-dark pb-5">Welcome back</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input name="email" placeholder="email"/>
        <Input name="password" placeholder="password" type="password"/>

        <Button text="Sign In" type="submit" className="bg-[#007DFD] text-white flex justify-center rounded-2xl"/>
      </form>
      <p className="pt-5">Don't have an account <Link to="/signup" className="text-[#007DFD]"> Sign up</Link></p>
    </div>
    </>
  )
}
export default Login 