import { useDispatch } from "react-redux"
import Input from "../../ui/Input"
import {createServices} from "../../services/businessServices/action"
import Button from "../../ui/Button"

const CreateService = () =>{
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async(event:any)=>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    await createServices(formValues)(dispatch)
  }
  return(
    <>

    <div className="flex flex-col items-center pt-28">
      
      <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
        <Input name="provider" placeholder="provider"/>
        <Input name="name" placeholder="name"/>
        </div>
    <div className="flex items-center gap-5">
    <Input name="description" placeholder="description"/>
    <Input name="duration" placeholder="duration"/>
    </div>
    <div className="flex items-center gap-5">
    <Input name="available" placeholder="avaliable slots"/>
    </div>
     
     <Button text="Create service"  type="submit" className="bg-[#007DFD] text-white flex justify-center rounded-2xl"/>
      </form>
    </div>
    </>
  )
}
export default CreateService