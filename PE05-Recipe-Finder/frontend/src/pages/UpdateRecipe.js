import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URI}/${id}`)
      .then(res => {
        setName(res.data.name);
        setIngredients(res.data.ingredients.join(", "));
        setInstructions(res.data.instructions);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { name, ingredients: ingredients.split(","), instructions };
    axios.put(`${process.env.REACT_APP_BACKEND_URI}/${id}`, updatedRecipe)
      .then(() => navigate(`/recipe/${id}`))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Update Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br/>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <br/>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
