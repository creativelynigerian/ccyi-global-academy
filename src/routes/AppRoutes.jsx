import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import { AdminProvider } from "../context/AdminContext";
import ProtectedRoute from "../components/ProtectedRoute";

// Existing Feature Modules
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

// ----------------- NEW FEATURE IMPORTS -----------------
// 1. Office Suite (Updated to match your new folder & file names)
import WordModule from "../features/office-suite/WordModule";
import ExcelModule from "../features/office-suite/ExcelModule";
import PowerPointModule from "../features/office-suite/PowerPointModule";
import AccessModule from "../features/office-suite/AccessModule";
import OutlookModule from "../features/office-suite/OutlookModule";

// 2. Other New Features (Matching your exact folder names)
import AIHome from "../features/ai-tools/AIHome";
import DigitalSafetyHome from "../features/digital-safety/DigitalSafetyHome";
import CyberHygieneHome from "../features/cyber-hygiene/CyberHygieneHome";
import GoogleWorkspaceHome from "../features/google-workspace/GoogleWorkspaceHome";
import EmailHome from "../features/email/EmailHome";
import BlogCreationHome from "../features/blog-creation/BlogCreationHome";
import ComputerFundamentalsHome from "../features/computer-fundamentals/ComputerFundamentalsHome";
import TypingSkillsHome from "../features/typing-skills/TypingSkillsHome";

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
        
        {/* Existing Features */}
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

        {/* ----------------- NEW FEATURE ROUTES ----------------- */}
        
        {/* 1. Office Suite Sub-Modules */}
        <Route path="/microsoft-office" element={<ProtectedRoute><WordModule /></ProtectedRoute>} />
        <Route path="/microsoft-office/word" element={<ProtectedRoute><WordModule /></ProtectedRoute>} />
        <Route path="/microsoft-office/excel" element={<ProtectedRoute><ExcelModule /></ProtectedRoute>} />
        <Route path="/microsoft-office/powerpoint" element={<ProtectedRoute><PowerPointModule /></ProtectedRoute>} />
        <Route path="/microsoft-office/access" element={<ProtectedRoute><AccessModule /></ProtectedRoute>} />
        <Route path="/microsoft-office/outlook" element={<ProtectedRoute><OutlookModule /></ProtectedRoute>} />

        {/* 2. Other New Features */}
        <Route path="/ai-tools" element={<ProtectedRoute><AIHome /></ProtectedRoute>} />
        <Route path="/digital-safety" element={<ProtectedRoute><DigitalSafetyHome /></ProtectedRoute>} />
        <Route path="/cyber-hygiene" element={<ProtectedRoute><CyberHygieneHome /></ProtectedRoute>} />
        <Route path="/google-workspace" element={<ProtectedRoute><GoogleWorkspaceHome /></ProtectedRoute>} />
        <Route path="/email" element={<ProtectedRoute><EmailHome /></ProtectedRoute>} />
        <Route path="/blog-creation" element={<ProtectedRoute><BlogCreationHome /></ProtectedRoute>} />
        <Route path="/computer-fundamentals" element={<ProtectedRoute><ComputerFundamentalsHome /></ProtectedRoute>} />
        <Route path="/typing-skills" element={<ProtectedRoute><TypingSkillsHome /></ProtectedRoute>} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminProvider><AdminDashboard /></AdminProvider>} />
    </Routes>
  );
}

export default AppRoutes;