import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const RecipeDetails = () => {
  const { Userid } = useParams()
  const [data, setData] = useState(null)

  // console.log(prosnalID)
  console.log(data)
  const descriptionPageFun = () => {
    axios.get(`https://recipe-app-oc1s.onrender.com/recipes/${Userid}/information`, {
      params: {
        apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY
      }
    })
      .then((res) => setData(res?.data))
      .catch((err) => console.error("API error:", err))
  }


  useEffect(() => {
    descriptionPageFun()
  }, [Userid])

  if (!data) return <div>Loading...</div>

  const {
    image,
    title,
    summary,
    pricePerServing,
    analyzedInstructions,
    extendedIngredients
  } = data
  const addToFav = () => {
    axios.post("https://recipe-app-oc1s.onrender.com/recipes/create", {
      image: data.image,
      title: data.title,
      summary: data.summary,
      pricePerServing: data.pricePerServing,
    }, {
      withCredentials: true,
    }).then((res) => alert(res.data.message))
      .catch((err) => console.log(err))
  }
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-green-700">🍽️ Recipe Detail</h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Recipe Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <span className="block text-lg font-medium text-green-600">
            💰 Price per Serving: ₹{pricePerServing}
          </span>
          <div
            className="text-gray-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: summary }}
          />

          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300" onClick={() => addToFav()}>
            ❤️ Add To Favorites
          </button>
        </div>
      </div>

      {/* Instructions */}
      {analyzedInstructions?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-gray-800">👨‍🍳 Instructions</h3>
          <div className="space-y-4">
            {analyzedInstructions.map((instruction, i) => (
              <div key={i} className="space-y-2">
                {instruction.steps.map(({ number, step }) => (
                  <div key={number} className="p-4 bg-white shadow-sm rounded-md">
                    <span className="font-semibold text-green-700">Step {number}:</span>
                    <p className="text-gray-700 mt-1">{step}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ingredients */}
      {extendedIngredients?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-gray-800">🧂 Ingredients</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {extendedIngredients.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
}

export default RecipeDetails
