import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MealID = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  1;
  const MealProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      console.log(res);
      setData(res.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    MealProducts();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(data);
  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item) => (
          <div    className="flex flex-row gap-6 items-start"
            key={item.idMeal}
            className="w-72 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-50 rounded-lg"
            />
            <h1>ID: {item.idMeal}</h1>
            <h2>Meal Name: {item.strMeal}</h2>
            <p>Area: {item.strArea}</p>
            <p>Country: {item.strCountry}</p>
          </div>
        ))}
        <div className="flex-1 p-4 border mb-4 rounded-lg">
          {data.map((items) => (
            <h1>{items.strInstructions}</h1>
          ))}
        </div>
        <div className="mb-4">
          {data.map((items) => (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IRadJQNLvPs"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MealID;

//https://www.themealdb.com/
