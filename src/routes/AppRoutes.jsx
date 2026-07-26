// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout"; // ← Correct path!
import Home from "../pages/Home";
import About from "../pages/About";
import Certificate from "../pages/Certificate";
import CUPortal from "../pages/CUPortal";
import Dashboard from "../pages/Dashboard";
import Grammarly from "../pages/Grammarly";
import InternetLogin from "../pages/InternetLogin";
import Moodle from "../pages/Moodle";
import Office365 from "../pages/Office365";
import Resources from "../pages/Resources";
import Support from "../pages/Support";
import Turnitin from "../pages/Turnitin";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Wrap all routes with Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="cuportal" element={<CUPortal />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="grammarly" element={<Grammarly />} />
        <Route path="internetlogin" element={<InternetLogin />} />
        <Route path="moodle" element={<Moodle />} />
        <Route path="office365" element={<Office365 />} />
        <Route path="resources" element={<Resources />} />
        <Route path="support" element={<Support />} />
        <Route path="turnitin" element={<Turnitin />} />
      </Route>
      {/* 404 - Not wrapped in Layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}