import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    // Check if user is admin from localStorage
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    const adminData = JSON.parse(localStorage.getItem('adminUser') || 'null');
    
    setIsAdmin(adminStatus);
    setAdminUser(adminData);
    
    // Check if edit mode was saved
    const savedEditMode = localStorage.getItem('editMode') === 'true';
    setEditMode(savedEditMode);
  }, []);

  const loginAdmin = (userData) => {
    localStorage.setItem('isAdmin', 'true');
    localStorage.setItem('adminUser', JSON.stringify(userData));
    setIsAdmin(true);
    setAdminUser(userData);
  };

  const logoutAdmin = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminUser');
    localStorage.removeItem('editMode');
    setIsAdmin(false);
    setAdminUser(null);
    setEditMode(false);
  };

  const toggleEditMode = () => {
    const newMode = !editMode;
    setEditMode(newMode);
    localStorage.setItem('editMode', String(newMode));
  };

  return (
    <AdminContext.Provider value={{
      isAdmin,
      editMode,
      adminUser,
      loginAdmin,
      logoutAdmin,
      toggleEditMode
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};