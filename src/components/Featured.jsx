import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FadeContent from "../Animation/FadeContent"

export default function Featured() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals.slice(0, 6)); // Take first 6 as featured
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div className="featuredRecipe">
      <h2>Featured </h2>
      <div className="recipe-grid">
        {recipes.map((meal) => (
        <Link to={`/recipeDetails/${meal.idMeal}`} key={meal.idMeal}>
          <FadeContent>
            <div key={meal.idMeal} className="recipe-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3> 
          </div>
          </FadeContent>
        </Link>
        ))}
      </div>
    </div>
  );
}
