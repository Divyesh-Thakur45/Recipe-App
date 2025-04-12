import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const SavedRecipes = () => {
    const { id } = useParams()
    const [data, setdata] = useState([])
    const showFav = () => {
        axios.get(`http://localhost:8080/recipes/get/${id}`, {
            withCredentials: true
        })
            .then((res) => setdata(res.data.message))
            .catch((err) => console.log(err))
    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/recipes/delete/${id}`, {
            withCredentials: true
        })
            .then((res) => (
                alert(res.data.message),
                showFav()
            ))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        showFav()
    }, [])
    return (
        <div>
            <div>
                <div className="pt-20 px-4 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-red-500 text-center sm:text-left">
                        ❤️ Your Favorite Recipes
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(({ image, pricePerServing, summary, title, _id }) => (
                            <div
                                key={_id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-48 object-cover sm:h-56 lg:h-60"
                                />

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {title}
                                    </h3>

                                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                                        {summary.replace(/<[^>]+>/g, '')}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-red-500 font-bold text-base">
                                            ₹{(pricePerServing / 100).toFixed(2)}
                                        </span>
                                        <button className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-full transition-all" onClick={() => deleteData(_id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SavedRecipes