import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div style={{ 
      background: 'white', 
      padding: '40px', 
      borderRadius: '16px', 
      border: '3px solid #10b981',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '32px', color: '#10b981', marginBottom: '10px' }}>
        ✅ AdminDashboard Component is Loading!
      </h1>
      <p style={{ fontSize: '18px', color: '#0a1628' }}>
        If you see this text, the file is 100% connected to the router.
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/course-control" style={{
          background: '#f5b400', color: '#0a1628', padding: '10px 20px',
          borderRadius: '8px', textDecoration: 'none', fontWeight: 700, display: 'inline-block'
        }}>
          Go to Course Control
        </Link>
      </div>
    </div>
  );
}