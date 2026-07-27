import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminLogin from "../pages/AdminLogin"; // ✅ This should work now
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

// Feature Modules
import MoodleHome from "../features/moodle/MoodleHome";
import TurnitinHome from "../features/turnitin/TurnitinHome";
import GrammarlyHome from "../features/grammarly/GrammarlyHome";
import Office365Home from "../features/office365/Office365Home";
import InternetHome from "../features/internet/InternetHome";
import CUPortalHome from "../features/cuportal/CUPortalHome";
import CertificateHome from "../features/certificates/CertificateHome";
import Resources from "../features/resources/Resources";
import Support from "../pages/Support";

// AI Course Creator
import AICourseCreator from "../features/aicoursecreator";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Main Application */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/moodle" element={<ProtectedRoute><MoodleHome /></ProtectedRoute>} />
        <Route path="/turnitin" element={<ProtectedRoute><TurnitinHome /></ProtectedRoute>} />
        <Route path="/grammarly" element={<ProtectedRoute><GrammarlyHome /></ProtectedRoute>} />
        <Route path="/office365" element={<ProtectedRoute><Office365Home /></ProtectedRoute>} />
        <Route path="/internet-login" element={<ProtectedRoute><InternetHome /></ProtectedRoute>} />
        <Route path="/cu-portal" element={<ProtectedRoute><CUPortalHome /></ProtectedRoute>} />
        <Route path="/certificate" element={<ProtectedRoute><CertificateHome /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
        
        {/* AI Course Creator */}
        <Route path="/ai-course-creator" element={<ProtectedRoute><AICourseCreator /></ProtectedRoute>} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;