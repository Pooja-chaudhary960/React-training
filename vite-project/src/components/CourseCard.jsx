import React from "react";
import { Clock, Users } from "lucide-react";

const CourseCard = ({
  Image,
  Title,
  Description,
  Duration,
  Enrolled,
  Price,
}) => {
  return (
    <div className="w-[380px] bg-white rounded-[24px] overflow-hidden border border-orange-300 shadow-md hover:shadow-xl transition-all duration-300">

      {/* Course Image */}
      <img
        src={Image}
        alt={Title}
        className="w-full h-60 object-cover"
      />

      {/* Course Details */}
      <div className="p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          {Title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-base leading-7">
          {Description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            <span>{Duration}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Users size={18} />
            <span>{Enrolled}</span>
          </div>

          <div className="text-yellow-400 text-lg">
            ⭐⭐⭐⭐⭐
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-orange-300 px-6 py-5 flex items-center justify-between">

        <h3 className="text-2xl font-bold text-sky-700">
          {Price}
        </h3>

        <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition">
          Learn More
        </button>

      </div>

    </div>
  );
};

export default CourseCard;