
import BookingCalendar from "./pages/booking";
import HomePage from "./pages/HomePage";
import ServicesOverview from "./pages/services/ServicesOverview";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from "./pages/signUp";
import CreateService from "./pages/services/createService";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
function App(){
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<HomePage />} />
    <Route path="services" element={<ServicesOverview/>}/>
    <Route path="bookings" element={<BookingCalendar/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUpPage/>}/>
    <Route path="create" element={<CreateService/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
 
)
}
export default App;