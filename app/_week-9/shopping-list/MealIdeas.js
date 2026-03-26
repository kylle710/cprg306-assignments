"use client";

import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
  try 
  {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; 
  } 
  catch (error) 
  {
    console.error("Error: cannot fetch meal ideas", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) 
{
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() 
  {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals || []);
  }

  useEffect(() => {
    if (ingredient) 
    {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (<p>No meal ideas found for "{ingredient}"</p>) : 
      (
        <ul>
          {meals.map((meal) => 
          (
            <li key={meal.idMeal} className="p-2 mb-2 bg-zinc-800 border rounded">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}