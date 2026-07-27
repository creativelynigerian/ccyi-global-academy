import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <AppRoutes />
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;