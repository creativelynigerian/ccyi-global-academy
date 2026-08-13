import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import OfficeSuite from './features/office-suite/OfficeSuite';
import WordModule from './features/office-suite/WordModule';
import ExcelModule from './features/office-suite/ExcelModule';
import PowerPointModule from './features/office-suite/PowerPointModule';
import OutlookModule from './features/office-suite/OutlookModule';
import AccessModule from './features/office-suite/AccessModule';
import Login from './pages/Login';
import Admin from './pages/Admin';
import CourseControl from './pages/CourseControl';
import ReportCard from './pages/ReportCard';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="office-suite" element={<OfficeSuite />} />
        <Route path="office-suite/word" element={<WordModule />} />
        <Route path="office-suite/excel" element={<ExcelModule />} />
        <Route path="office-suite/powerpoint" element={<PowerPointModule />} />
        <Route path="office-suite/outlook" element={<OutlookModule />} />
        <Route path="office-suite/access" element={<AccessModule />} />
        <Route path="admin" element={<Admin />} />
        <Route path="course-control" element={<CourseControl />} />
        <Route path="report-card" element={<ReportCard />} />
      </Route>
    </Routes>
  );
}

export default App;
