import { Outlet } from "react-router"
import NavBar from "./NavBar"

const Layout = () =>{
return (
  <>
  <div className="px-24 py-5">
    <NavBar/>
    <Outlet/>
  </div>
  </>
)
}
export default Layout