import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfileManagementPage from './pages/ProfileManagementPage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <App/>
  // <Provider store={store}>
  //   <Router>
  //     <Routes>
  //       <Route path="/signup" element={<SignUpPage />} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/" element={<Navigate to="/signup" />} />
  //       <Route path="/home" element={<HomePage />} />
  //       <Route path="/profile" element={<ProfileManagementPage />} /> {/* Direct access to profile */}
  //     </Routes>
  //   </Router>
  // </Provider>
);
