import React, { useState, useEffect } from 'react';
import moodleApi from '../services/moodleApi';

function MoodleTest() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await moodleApi.getUsers();
        console.log('Moodle response:', data);
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
        console.error('Error:', err);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Moodle Users</h2>
      <p>Total users: {users.length}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstname} {user.lastname} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default MoodleTest;
