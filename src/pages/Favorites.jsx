import React, { useEffect, useState } from "react";
import Choose from "../components/Choose";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (idMeal) => {

    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);


    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <>
     <NavBar />
      <main className="favorite-page">
      <div className="titleFavorite">
        <h1>Saved</h1>
        <Link to='/home' className="favoritBack"><i className="fa-solid fa-arrow-left"></i></Link>
      </div>
      <Choose />
      <div>
        <div className="meal-grid">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <div className="detailsRecipes">
                <i className="fa-solid fa-trash" id="mano" onClick={() => handleRemove(meal.idMeal)}></i>
                <Link to={`/recipeDetails/${meal.idMeal}`}>
                  <button>View Recipe</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
