import { useState, useEffect } from 'react';
import type { User } from '../components/UserTable';
import UserCreationForm from '../components/UserCreationForm';
import UserTable from '../components/UserTable';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-8">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Create New User</h2>
          <div className="mt-5">
            <UserCreationForm setUsers={setUsers} />
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">User List</h2>
          <div className="mt-5">
            <UserTable users={users} setUsers={setUsers}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
