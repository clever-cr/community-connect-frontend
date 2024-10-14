import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff; /* White background */
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333; /* Dark text color */
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff; /* Blue button color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px; /* Add margin for spacing */
  
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const Message = styled.p`
  font-size: 20px;
  color: #333;
  margin: 20px 0;
  text-align: center;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <Container>
      <Title>Welcome to Community Connect!</Title>
      <Message>Having an account?</Message>
      <Button onClick={() => navigate('/login')}>Login</Button> {/* Convert to button */}
      <Message>Don't have an account?</Message>
      <Button onClick={() => navigate('/signup')}>Sign Up</Button> {/* Convert to button */}
    </Container>
  );
};

export default HomePage;
