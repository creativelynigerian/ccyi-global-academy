import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import About from './pages/About';
import Certificate from './pages/Certificate';
import Admin from './pages/Admin';
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

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/moodle" element={<Moodle />} />
      <Route path="/turnitin" element={<Turnitin />} />
      <Route path="/office365" element={<Office365 />} />
      <Route path="/internet-login" element={<InternetLogin />} />
      <Route path="/grammarly" element={<Grammarly />} />
      <Route path="/cu-portal" element={<CU_Portal />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
