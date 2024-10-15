import { Link } from "react-router-dom"

 const NavBar = () =>{
  return(
    <>
    <div className="px-5 py-5">
    <div className="flex items-center justify-between ">
      <Link to="/" className="text-lg">Community<span className="text-[#007DFD]">Connect</span></Link>
      <div className="flex items-center gap-5"> 
        <Link className="hover:text-[#007DFD]" to="services">Services</Link>
        <Link  className="hover:text-[#007DFD]" to="bookings">Bookings</Link>
        <Link className="hover:text-[#007DFD]" to="login">Login</Link>
      </div>

    </div>
    </div>
    
    </>
  )
 }
 export default NavBar