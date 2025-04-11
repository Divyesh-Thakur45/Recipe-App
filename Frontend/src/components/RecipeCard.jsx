import React, { useEffect, useState } from 'react'
import axios from 'axios';

const RecipeCard = () => {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        axios
            .get(`http://localhost:8080/recipes/search`, {
                withCredentials: true,
            })
            .then((res) => setRecipes(res.data.message?.results))
            .catch((err) => console.error("Fetch failed:", err));
    }, [])
    return (
        <div>
            {recipes.map(({ image, title, summery, pricePerServing }) => (
                <div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <span>{pricePerServing}</span>
                        <p>{summery}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecipeCard