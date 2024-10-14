import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
  text-align: center;
`;

const ProfileManagementPage: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [services, setServices] = useState('');
  const [availability, setAvailability] = useState('');
  const [pricing, setPricing] = useState('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/communityconnect/user/profile');
        const { businessName, services, availability, pricing, profilePictureUrl } = response.data;
        
        setBusinessName(businessName);
        setServices(services);
        setAvailability(availability);
        setPricing(pricing);
        // Optionally, set a profile picture URL to display if needed
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!businessName || !services || !availability || !pricing) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('businessName', businessName);
    formData.append('services', services);
    formData.append('availability', availability);
    formData.append('pricing', pricing);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      // Make API call to update profile endpoint
      const response = await axios.put('http://localhost:3000/communityconnect/user/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming update was successful and response contains updated profile data
      console.log('Profile updated:', response.data);

      // Reset form
      setBusinessName('');
      setServices('');
      setAvailability('');
      setPricing('');
      setProfilePicture(null);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Profile update failed. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Profile Management</Title>
      {loading ? <p>Loading...</p> : error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description of Services"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          required
        />
        <TextArea
          placeholder="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Pricing"
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
          required
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setProfilePicture(e.target.files[0]);
            }
          }}
        />
        <Button type="submit">Update Profile</Button>
      </Form>
    </Container>
  );
};

export default ProfileManagementPage;
