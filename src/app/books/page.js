"use client"

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/showbooks");
      setData(response.data.mybooks);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle delete operation
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/deletebook/${id}`);
      // After successful deletion, fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year Published</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data && data.map((dat, index) => (
              <tr key={index} className="transition-all hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{dat.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dat.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dat.yearpublished}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={dat.coverimg} alt="" className="h-16 w-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Link href={`/updatebook/${dat._id}`}>Update</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(dat._id)} // Assuming _id is the unique identifier for each book
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
