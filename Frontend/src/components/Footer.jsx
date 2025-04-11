// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                    {/* App Info */}
                    <div>
                        <h2 className="text-xl font-bold text-red-500 mb-2">🍲 RecipeApp</h2>
                        <p className="text-sm">
                            Discover, save, and manage your favorite recipes easily.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                            <li><Link to="/favorites" className="hover:text-red-500">Favorites</Link></li>
                            <li><Link to="/login" className="hover:text-red-500">Login</Link></li>
                            <li><Link to="/register" className="hover:text-red-500">Register</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <p className="text-sm">Email: support@recipeapp.com</p>
                        <div className="flex justify-center sm:justify-start mt-2 space-x-4">
                            <a href="#" className="hover:text-red-500">📘</a>
                            <a href="#" className="hover:text-red-500">📸</a>
                            <a href="#" className="hover:text-red-500">🐦</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} RecipeApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
