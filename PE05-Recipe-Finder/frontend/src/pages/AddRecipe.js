import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_URI)
    const recipe = { name, ingredients: ingredients.split(","), instructions };
    axios.post(process.env.REACT_APP_BACKEND_URI, recipe)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br/>
        <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <br/>
        <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRecipe;
