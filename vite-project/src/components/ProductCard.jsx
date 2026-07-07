import React from "react";

const ProductCard = ({ IDCategory, Category, Image, Description }) => {
  return (
    <div className="w-64 border rounded-lg shadow-md p-4 mb-4">
      <img
        src={Image}
        alt={Category}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="text-xl font-bold mt-3">{Category}</h2>

      <p className="text-sm text-gray-500 mt-1">
        ID: {IDCategory}
      </p>

      <p className="text-gray-700 mt-2 line-clamp-3">
        {Description}
      </p>
    </div>
  );
};

export default ProductCard;