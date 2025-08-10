import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [show, setShow] = useState("ingredients");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };
  if (!meal) return <p>Meal not found.</p>;

  return (
    <div className="recipe-details">
      <NavBar />
      {meal && (
        <Link to={`/cuisine/${meal.strArea}`} className="backBtn">
          <button>
            <i className="fa-solid fa-arrow-left"></i> 
          </button>
        </Link>
      )}

      <div className="foodyImage">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="bodyDetails">
        <h1>{meal.strMeal}</h1>
        <div className="buttonShowDetails">
          <button
            onClick={() => setShow("ingredients")}
            style={{
              backgroundColor: show === "ingredients" ? "#1d7a5e" : "#ceedb2",
              color: show === "ingredients" ? "white" : "#333333",
            }}
          >
            Ingredients
          </button>
          <button
            onClick={() => setShow("instructions")}
            style={{
              backgroundColor: show === "instructions" ? "#1d7a5e" : "#ceedb2",
              color: show === "instructions" ? "white" : "#333333",
            }}
          >
            Instructions
          </button>
        </div>
        {show === "ingredients" && (
          <ul className="listDetails">
            {getIngredients().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {show === "instructions" && <p>{meal.strInstructions}</p>}

        {meal.strYoutube && (
          <>
            <h2>Video Recipe</h2>
            <button className="buttonYout">
              <a href={meal.strYoutube} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
