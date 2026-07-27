import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ 
        flex: 1, 
        padding: '20px',
        marginLeft: '250px', // Adjust based on your sidebar width
        minHeight: '100vh'
      }}>
        <Outlet />
      </div>
    </div>
  );
}
