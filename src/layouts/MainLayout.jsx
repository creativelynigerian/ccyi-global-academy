import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { PlusCircle } from 'lucide-react';
import { useMoodle } from '../context/MoodleContext';

const MainLayout = () => {
  const location = useLocation();
  const { openCourseCreator } = useMoodle();
  const isMoodlePage = location.pathname.startsWith('/moodle');

  // Get page title based on current path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/moodle') return 'Moodle LMS Dashboard';
    if (path === '/moodle/guides') return 'Training Guides';
    if (path === '/moodle/videos') return 'Video Lessons';
    if (path === '/moodle/downloads') return 'Downloads';
    if (path === '/moodle/faq') return 'FAQ';
    if (path === '/turnitin') return 'Turnitin';
    if (path === '/office365') return 'Office 365';
    if (path === '/internet-login') return 'Internet Login';
    if (path === '/grammarly') return 'Grammarly';
    if (path === '/cu-portal') return 'CU Portal';
    if (path === '/resources') return 'Resources';
    if (path === '/support') return 'Support';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {getPageTitle()}
          </h2>
          
          {/* Show "Create Course" button only on Moodle pages */}
          {isMoodlePage && (
            <button
              onClick={openCourseCreator}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <PlusCircle size={20} />
              Create New Training Course
            </button>
          )}
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;