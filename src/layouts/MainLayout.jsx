import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Logo from '../components/common/Logo';

const MainLayout = () => {
  const navigate = useNavigate();
  
  // Get the user role to control the Admin link visibility
  const userRole = localStorage.getItem('userRole') || 'student';

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole'); // Important to clear this too!
    navigate('/login');
  };

  return (
    <div className="flex h-screen font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">
        
        {/* --- HEADER --- */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-4">
            <Logo size="small" variant="text" />
            
            {/* Secure Admin Link - Hidden for students */}
            {(userRole === 'superadmin' || userRole === 'manager') && (
              <a 
                href="/admin/dashboard" 
                className="text-indigo-600 text-sm font-medium px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors flex items-center gap-1.5"
              >
                <span>⚙️</span> Admin
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-[#002147] text-white py-4 px-6 border-t-2 border-yellow-400 flex-shrink-0">
          <div className="flex justify-center items-center gap-4 flex-wrap text-sm">
            <span>Powered by</span>
            <a href="#" className="text-yellow-400 font-medium hover:underline">
              CCYI Global Enterprise
            </a>
            <span className="text-[#4b6a8a]">|</span>
            <span>📞 07018327021</span>
            <span className="text-[#4b6a8a]">|</span>
            <a href="mailto:ceoccyige@gmail.com" className="text-yellow-400 font-medium hover:underline">
              📧 ceoccyige@gmail.com
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default MainLayout;