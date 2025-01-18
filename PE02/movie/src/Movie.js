import React from "react"
import "./MovieCard.css"
function Movie(props) {
    const {
        title,genre,releaseYear
    }=props
    const clickMovie=() => {
        alert(`You click on ${title}`)
    }
    return (
        <div className="MovieCard" onClick={clickMovie}>
            <h1>
                {title}
            </h1>
            <p>
                {genre}
            </p>
            <p> Released: {releaseYear}</p>
        </div>
    )
}

export default Movie