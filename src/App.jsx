import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import OfficeSuite from './features/office-suite/OfficeSuite';
import WordModule from './features/office-suite/WordModule';
import ExcelModule from './features/office-suite/ExcelModule';
import PowerPointModule from './features/office-suite/PowerPointModule';
import OutlookModule from './features/office-suite/OutlookModule';
import AccessModule from './features/office-suite/AccessModule';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CourseControl from './pages/CourseControl';
import ReportCard from './pages/ReportCard';
import StudentDashboard from './pages/StudentDashboard';
import Certificate from './pages/Certificate';
import Resources from './pages/Resources';
import Support from './pages/Support';

import Layout from './components/layout/Layout';
import AdminLayout from './layouts/AdminLayout';

// Read role ONCE at top level, no re-reads per route
function getRole() {
  return localStorage.getItem('userRole');
}

// A proper guard component — no Navigate inside ternaries at route level
function RequireRole({ allowed, children }) {
  const role = localStorage.getItem('userRole');
  if (!role || !allowed.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const role = getRole();

  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={
        <RequireRole allowed={['superadmin', 'manager']}>
          <AdminLayout><AdminDashboard /></AdminLayout>
        </RequireRole>
      } />

      <Route path="/course-control" element={
        <RequireRole allowed={['superadmin', 'manager']}>
          <AdminLayout><CourseControl /></AdminLayout>
        </RequireRole>
      } />

      <Route path="/report-card" element={
        <RequireRole allowed={['superadmin', 'manager']}>
          <AdminLayout><ReportCard /></AdminLayout>
        </RequireRole>
      } />

      {/* STUDENT */}
      <Route path="/student" element={
        <RequireRole allowed={['student']}>
          <StudentDashboard />
        </RequireRole>
      } />

      <Route path="/certificate" element={<Layout><Certificate /></Layout>} />
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/support" element={<Layout><Support /></Layout>} />

      {/* OFFICE SUITE */}
      <Route path="/office-suite" element={<Layout><OfficeSuite /></Layout>} />
      <Route path="/office-suite/word" element={<Layout><WordModule /></Layout>} />
      <Route path="/office-suite/excel" element={<Layout><ExcelModule /></Layout>} />
      <Route path="/office-suite/powerpoint" element={<Layout><PowerPointModule /></Layout>} />
      <Route path="/office-suite/outlook" element={<Layout><OutlookModule /></Layout>} />
      <Route path="/office-suite/access" element={<Layout><AccessModule /></Layout>} />

      {/* ROOT */}
      <Route path="/" element={
        !role
          ? <Navigate to="/login" replace />
          : (role === 'superadmin' || role === 'manager')
            ? <Navigate to="/admin" replace />
            : role === 'student'
              ? <Navigate to="/student" replace />
              : <Navigate to="/login" replace />
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;