import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

const Events = () => {
 const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const MealProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php",
      );
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
  }, []);
  console.log(data);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item) => (
          <MealCard
            key={item.idMeal}
            ID={item.idMeal}
            StrMeal={item.strMeal}
            StrMealAlternate={item.strMealAlternate}
            StrMealCategory={item.strCategory}
            StrArea={item.strArea}
            StrCountry={item.strCountry}
            StrInstructions={item.strInstructions}
            StrMealThumb={item.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
