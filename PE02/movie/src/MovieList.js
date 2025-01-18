import React, { useState } from "react"
import Movie from "./Movie";
const MovieList=()=>{
    const [genre,setGenre]=useState("All")
    const movies=[ //create a list of movies
        { title: "Crash landing on you", genre: "Drama", releaseYear: 2020 },
        { title: "The church of evil", genre: "Horrible", releaseYear: 2023 },
        { title: "Around Asian", genre: "Food show", releaseYear: 2024 },
        { title: "Work on Christmas Eve", genre: "Crime", releaseYear: 2019 },
        { title: "Single Inferno", genre: "Dating show", releaseYear: 2022 }
    ];
    const handleGenre=(e)=>{
        setGenre(e.target.value)

    }
  
    return (
        <div>
            <h1>Movie List</h1>
            <label for="genre">
                Genre: 
            </label>
            <select name="genre" value={genre} onChange={handleGenre}>
                <option value="All">All</option>
                {movies.map(item=>(
                    <option value={item.genre}>
                    {item.genre}
                    </option>
                ))}
            </select>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>{movies.map(item=>{
                if (item.genre===genre || genre==="All") {
                    return <Movie title={item.title} genre={item.genre} releaseYear={item.releaseYear}/>
                }
                
                }
            )
            
        }
        </div>

                

        </div>
    )
    
}
export default MovieList