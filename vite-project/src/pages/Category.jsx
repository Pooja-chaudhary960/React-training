import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const nav = useNavigate();
  const { categoryName } = useParams();
  console.log(categoryName);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const MealProduct = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `        https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}
`,
      );
      console.log(res);
      setData(res.data.meals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    MealProduct();
  }, [categoryName]);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">
      <div
      
        className="flex flex-wrap justify-center gap-10"
      >
        {data.map((item) => (
          <div
            key={item.categoryName}
              onClick={() => nav(`/id/${item.categoryName}`)}
            key={item.categoryName}
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
      </div>
    </div>
  );
};

export default Category;
