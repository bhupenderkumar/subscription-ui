import React, { useState, useEffect } from 'react';

export interface User {
  userId: number;
  username: string;
  email: string;
}

export const fetchUsers = async (setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
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

interface UserTableProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserTable: React.FC<UserTableProps> = ({ users, setUsers }) => {


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
    <div className="shadow-md rounded">
      <h2 className="text-lg font-medium leading-6 text-gray-900">User List</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              User ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Username
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.userId}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.username}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;