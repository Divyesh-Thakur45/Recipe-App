import React from 'react'
import RecipeCard from '../components/RecipeCard'

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 mt-14">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Recipe App 🍽️</h1>
                <p className="text-lg text-gray-600 text-center">
                    Discover, save, and explore your favorite recipes in one place.
                </p>
                <div>
                    <input type="text" name="" id="" />
                </div>
                <div className="flex gap-4">
                    <RecipeCard />
                </div>
            </div>
        </div>
    )
}

export default Home