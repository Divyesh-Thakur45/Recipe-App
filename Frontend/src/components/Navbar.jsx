import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }
    return (
        <div>
            <nav className="bg-white shadow-md fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-xl font-bold text-red-500">
                                🍲 RecipeApp
                            </Link>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex space-x-4 items-center">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-red-500 transition font-medium"
                            >
                                Home
                            </Link>


                            <Link
                                to="/favorites"
                                className="text-gray-700 hover:text-red-500 transition font-medium"
                            >
                                ❤️ Favorites
                            </Link>



                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-red-500 transition font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-gray-700 hover:text-red-500 transition font-medium"
                                >
                                    Register
                                </Link>
                            </>

                            <button
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-red-500 focus:outline-none">
                                ☰
                            </button>
                            {/* For full mobile nav, you can toggle a dropdown here */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar