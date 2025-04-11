// Allroutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import RecipeDetails from '../components/RecipeDetails';
import SavedRecipes from '../components/SavedRecipes';

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/details' element={<RecipeDetails />} />
            <Route path='/favorites' element={<SavedRecipes />} />
        </Routes>
    );
};

export default Allroutes;
