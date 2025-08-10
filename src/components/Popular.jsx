import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FadeContent from "../Animation/FadeContent";

export default function Popular() {
  const { area } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate =  useNavigate();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [area]);

  
  const handleAddFavorite = (meal) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!storedFavorites.find((fav) => fav.idMeal === meal.idMeal)) {
      storedFavorites.push(meal);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    }
    navigate("/favorites")
  };
  return (
    <>
    <div className="popularCuisine">
      <h1>Popular</h1>
      <div className="meal-gridPopular">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-cardPopular">
            <FadeContent>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <div className="detailsPopular">
              <i className="fa-regular fa-bookmark" onClick={() => handleAddFavorite(meal)}></i>
              <Link to={`/recipeDetails/${meal.idMeal}`}>
                <button>View Recipe</button>
              </Link>
            </div>
            </FadeContent>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
