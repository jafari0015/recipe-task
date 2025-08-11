import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const [areas, setAreas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
                const data = await res.json();

                const areasWithImages = await Promise.all(
                    data.meals.map(async (area) => {

                        const mealRes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area.strArea}`);
                        const mealData = await mealRes.json();
                        const firstMeal = mealData.meals[0];
                        return {
                            name: area.strArea,
                            image: firstMeal.strMealThumb
                        };
                    })
                );

                setAreas(areasWithImages);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <div className="container">
                <div className="scroll-container">
                    {areas.map((area) => (
                                <button
                                    key={area.name}
                                    className="cuisine-btn"
                                    onClick={() => navigate(`/cuisine/${area.name}`)}
                                >
                                    <img src={area.image} alt={area.name} className="cuisine-img" />
                                    <span>{area.name}</span>
                                </button>
                    ))}
                </div>
            </div>
        </>
    );
}
