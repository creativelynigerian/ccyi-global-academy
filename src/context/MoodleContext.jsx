import React, { createContext, useState, useContext } from 'react';

const MoodleContext = createContext();

export const MoodleProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openCourseCreator = () => setShowModal(true);
  const closeCourseCreator = () => setShowModal(false);

  return (
    <MoodleContext.Provider value={{ 
      showModal, 
      openCourseCreator, 
      closeCourseCreator 
    }}>
      {children}
    </MoodleContext.Provider>
  );
};

export const useMoodle = () => {
  const context = useContext(MoodleContext);
  if (!context) {
    throw new Error('useMoodle must be used within a MoodleProvider');
  }
  return context;
};