import React from 'react'

const MealCard = ({ ID, StrMeal, StrMealAlternate, StrMealCategory, StrArea, StrCountry, StrInstructions, StrMealThumb }) => {
  return (
    <div>
      <img src={StrMealThumb} alt={StrMeal} className="w-full h-80 object-cover rounded-lg" />
      <h3>{StrMeal}</h3>
      <p>ID: {ID}</p>
      <p>Alternate Name: {StrMealAlternate}</p>
      <p>Category: {StrMealCategory}</p>
      <p>Area: {StrArea}</p>
      <p>Country: {StrCountry}</p>
      <p>Instructions: {StrInstructions}</p>
    </div>
  )
}

export default MealCard