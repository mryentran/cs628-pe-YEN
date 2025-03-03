import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import UpdateRecipe from "./pages/UpdateRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/update-recipe/:id" element={<UpdateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
