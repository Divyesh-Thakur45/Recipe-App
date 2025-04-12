import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeCard = () => {
    const [loading, setloading] = useState(false)
    const [recipes, setRecipes] = useState([]);
    const didFetch = useRef(false); // prevent multiple fetches

    useEffect(() => {

        if (!didFetch.current) {
            didFetch.current = true;
            axios
                .get(`http://localhost:8080/recipes/search`, {
                    withCredentials: true,
                })
                .then((res) => {
                    setloading(res.data.success);
                    setRecipes(res.data.message?.results || []);
                })
                .catch((err) => console.error("Fetch failed:", err));
        }
    }, []);

    return loading ? (

        <div className='flex flex-wrap gap-6 justify-center p-6 bg-gray-100'>
            {recipes.map(({ image, title, summary, pricePerServing, id }) => (
                <div
                    key={id}
                    className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] hover:scale-105 transition-transform duration-300"
                >
                    <Link to={`/details/${id}`}>
                        <img src={image} alt={title} className="w-full h-48 object-cover" />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                            <span className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                                ${pricePerServing}
                            </span>
                            <p className="text-gray-600 text-sm line-clamp-2">{summary}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    ) : <h1 className="text-center text-xl py-10">Loading...</h1>
};

export default RecipeCard;
