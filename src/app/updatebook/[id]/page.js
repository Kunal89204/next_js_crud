"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    yearpublished: "",
    coverimg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/singlebook/${id}`)
      .then((response) => {
        setFormData({
          title: response.data.title,
          author: response.data.author,
          yearpublished: response.data.yearpublished,
          coverimg: response.data.coverimg,
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the book data!", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/updatebook/${id}`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the book!", error);
      });
    console.log(formData);
    // Reset form after submission
    setFormData({
      title: "",
      author: "",
      yearpublished: "",
      coverimg: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="yearpublished"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="coverimg"
          >
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

export default Page;
