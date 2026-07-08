import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ IDCategory, Category, Image, Description }) => {
  const nav = useNavigate();
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
      <button 
      onClick={()=>nav(`/category/${Category}`)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    
  );
};

export default ProductCard;