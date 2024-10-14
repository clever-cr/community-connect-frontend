// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice'; // Make sure this is your login action
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';

import Input from "../ui/Input"

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh; /* Full height */
//   background-color: #f9f9f9; /* Light gray background */
//   font-family: 'Arial', sans-serif;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   color: #333; /* Dark text color */
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 300px; /* Set a fixed width for the form */
//   background-color: white; /* White background for the form */
//   padding: 20px;
//   border-radius: 10px; /* Rounded corners */
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
// `;

// const Input = styled.input`
//   margin-bottom: 15px;
//   padding: 10px;
//   border: 1px solid #ccc; /* Light gray border */
//   border-radius: 5px;
//   font-size: 16px;

//   &:focus {
//     border-color: #007bff; /* Blue border on focus */
//     outline: none; /* Remove outline */
//   }
// `;

// const Button = styled.button`
//   background-color: #007bff; /* Blue button color */
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3; /* Darker blue on hover */
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red; /* Red color for error messages */
//   margin-bottom: 15px; /* Spacing below error message */
//   text-align: center; /* Center the error message */
// `;

// const SignUpPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [role] = useState('business'); // Set default role
//   const [location, setLocation] = useState({ address: '', city: '', zip: '', country: '' });
//   const [error, setError] = useState<string | null>(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !name || !password || !location.address || !location.city || !location.zip || !location.country) {
//       setError('All fields are required');
//       return;
//     }

//     // Log the data being sent to the signup API
//     console.log("Sending data to signup:", { email, name, password, role, location });

//     try {
//       // Make API call to signup endpoint
//       const response = await axios.post('http://localhost:3000/communityconnect/user/signup', {
//         email,
//         name,
//         password,
//         role,
//         location,
//       });

//       // Assuming signup was successful and response contains user data
//       dispatch(login(response.data)); // Call the login action to update auth state

//       // Navigate to the login page after signup
//       navigate('/login'); // Redirect to the login page after successful signup
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'Signup failed. Please try again.'); // Handle error case
//     }
//   };

//   return (
//     <Container>
//       <Title>Sign Up</Title>
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//       <Form onSubmit={handleSubmit}>
//         <Input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <Input 
//           type="text" 
//           placeholder="Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           required 
//         />
//         <Input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <Input 
//           type="text" 
//           placeholder="Address" 
//           value={location.address} 
//           onChange={(e) => setLocation({ ...location, address: e.target.value })} 
//           required 
//         />
//         <Input 
//           type="text" 
//           placeholder="City" 
//           value={location.city} 
//           onChange={(e) => setLocation({ ...location, city: e.target.value })} 
//           required 
//         />
//         <Input 
//           type="text" 
//           placeholder="ZIP" 
//           value={location.zip} 
//           onChange={(e) => setLocation({ ...location, zip: e.target.value })} 
//           required 
//         />
//         <Input 
//           type="text" 
//           placeholder="Country" 
//           value={location.country} 
//           onChange={(e) => setLocation({ ...location, country: e.target.value })} 
//           required 
//         />
//         <Button type="submit">Sign Up</Button>
//       </Form>
     
//     </Container>
//   );
// };

// export default SignUpPage;

const signUpPage = () =>{
return (
  <>
  <h1>Sign up</h1>
  <form className="flex flex-col">
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <Input name="" value="" type="" />
    <button>Sign up</button>
  </form>
  </>
)
}
export default signUpPage