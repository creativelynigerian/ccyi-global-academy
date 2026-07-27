import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Moodle from './pages/platforms/Moodle';
import Turnitin from './pages/platforms/Turnitin';
import Office365 from './pages/platforms/Office365';
import InternetLogin from './pages/platforms/InternetLogin';
import Grammarly from './pages/platforms/Grammarly';
import CU_Portal from './pages/platforms/CU_Portal';
import Resources from './pages/platforms/Resources';
import Support from './pages/platforms/Support';
import './index.css';
import './platform-pages.css';

// Protected Route component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/moodle" element={
          <ProtectedRoute>
            <Moodle />
          </ProtectedRoute>
        } />
        <Route path="/turnitin" element={
          <ProtectedRoute>
            <Turnitin />
          </ProtectedRoute>
        } />
        <Route path="/office365" element={
          <ProtectedRoute>
            <Office365 />
          </ProtectedRoute>
        } />
        <Route path="/internet-login" element={
          <ProtectedRoute>
            <InternetLogin />
          </ProtectedRoute>
        } />
        <Route path="/grammarly" element={
          <ProtectedRoute>
            <Grammarly />
          </ProtectedRoute>
        } />
        <Route path="/cu-portal" element={
          <ProtectedRoute>
            <CU_Portal />
          </ProtectedRoute>
        } />
        <Route path="/resources" element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        } />
        <Route path="/support" element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
