"use client"

import axios from 'axios';
import React, { useState } from 'react';


const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    yearpublished: '',
    coverimg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/addbooks', formData)
    .then((respo) => {
      console.log(respo.data)
    })
    console.log(formData);
    // Reset form after submission
    setFormData({
      title: '',
      author: '',
      yearpublished: '',
      coverimg: ''
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Enter author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearpublished">
            Year Published
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="yearpublished"
            type="text"
            placeholder="Enter year published"
            name="yearpublished"
            value={formData.yearpublished}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverimg">
            Cover Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coverimg"
            type="text"
            placeholder="Enter cover image URL"
            name="coverimg"
            value={formData.coverimg}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
