import React from "react";

const Cards = ({
  ID,
  Title,
  Description,
  Category,
  Price,
  DisCountPercentage,
  Rating,
  Stock,
  Thumbnail,
}) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Product Image */}
      <img
        src={Thumbnail}
        alt={Title}
        className="w-full h-56 object-cover"
      />

      {/* Card Body */}
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">Product ID: {ID}</p>

        <h2 className="text-2xl font-bold text-red-600 mb-3">
          {Title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {Description}
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Category:</span> {Category}
          </p>

          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-green-600 font-bold">${Price}</span>
          </p>

          <p>
            <span className="font-semibold">Discount:</span>{" "}
            <span className="text-red-500">
              {DisCountPercentage}%
            </span>
          </p>

          <p>
            <span className="font-semibold">Rating:</span> ⭐ {Rating}
          </p>

          <p>
            <span className="font-semibold">Stock:</span> {Stock}
          </p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;