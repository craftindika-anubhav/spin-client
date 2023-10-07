'use client';
import { useEffect, useState } from 'react';
import UserTable from './UserTable';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Admin() {
  const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${SERVER_DOMAIN}/api/admin/get-emails`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleLogout}
        className="absolute right-0 mr-8 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <div className="text-3xl text-center my-2 font-semibold text-white">
        Submitted Data
      </div>
      <UserTable data={data} />
    </div>
  );
}
