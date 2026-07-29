import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const blog = useSelector((item) => item.blog.posts);
  console.log(blog);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h1 className="text-2xl font-bold text-blue-600 mb-4">
              {item.name}
            </h1>

            <p className="mb-2">
              <span className="font-semibold">Email:</span> {item.email}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Gender:</span> {item.gender}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Hobbies:</span>{" "}
              {Array.isArray(item.hobbies)
                ? item.hobbies.join(", ")
                : item.hobbies}
            </p>

            <p className="mb-4">
              <span className="font-semibold">Country:</span> {item.country}
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
