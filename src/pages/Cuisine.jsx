import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Choose from "../components/Choose";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Cuisine() {
  const { area } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate =  useNavigate();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
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
    <NavBar />
    <div className="cuisineFood">
      <h1 className="title">{area} Dishes</h1>
      <Choose />
      <Link to="/home" className="back-btn"><i className="fa-solid fa-arrow-left"></i></Link>
      <div className="meal-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <div className="detailsRecipes">
              <i className="fa-regular fa-bookmark" onClick={() => handleAddFavorite(meal)}></i>
              <Link to={`/recipeDetails/${meal.idMeal}`}>
                <button>View Recipe</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
