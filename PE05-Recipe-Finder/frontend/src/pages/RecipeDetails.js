import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URI}/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URI}/${id}`)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <Link to={`/update-recipe/${id}`}>Edit</Link>
      <br/>
      <button onClick={handleDelete}>Delete</button>
      <br/>
      <Link to="/">Back</Link>
    </div>
  );
};

export default RecipeDetails;
