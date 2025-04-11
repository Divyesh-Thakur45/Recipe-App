import React from 'react'

const dummyRecipes = [
    {
        id: "1",
        title: "Spaghetti Bolognese",
        summary: "A classic Italian pasta dish with rich meat sauce.",
        image: "https://via.placeholder.com/300x200?text=Spaghetti",
    },
    {
        id: "2",
        title: "Chicken Tikka Masala",
        summary: "Creamy tomato sauce with tender grilled chicken.",
        image: "https://via.placeholder.com/300x200?text=Chicken+Tikka",
    },
    {
        id: "3",
        title: "Avocado Salad",
        summary: "Healthy and fresh avocado salad with lime dressing.",
        image: "https://via.placeholder.com/300x200?text=Avocado+Salad",
    },
];
const SavedRecipes = () => {
    return (
        <div>
            <div className="pt-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-red-500 text-center sm:text-left">
                    ❤️ Your Favorite Recipes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dummyRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="text-lg font-semibold mt-2">{recipe.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {recipe.summary.slice(0, 100)}...
                            </p>
                            <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SavedRecipes