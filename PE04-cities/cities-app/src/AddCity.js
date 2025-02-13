import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function AddCity({setCities}){
    const [cityName,setCityName]=useState("")
    const [country,setCountry]=useState("")
    const [population,setPopulation]=useState("")

    const handleAddCity=()=>{
        setCities(prevState=>[...prevState,
            {
            id:Date.now(), // I use Date.now() for the city id
            cityName,
            country,
            population,
        }])
    }
    return(
        <div>
            <h1>Add City</h1>
            <label for="city-name">Name: </label>
            <input value={cityName} onChange={(e)=>setCityName(e.target.value)} name="city-name" id="city-name" type="text"/>
            <br/>
            <label for="country">Country: </label>
            <input value={country} onChange={(e)=>setCountry(e.target.value)} name="country" id="country" type="text"/>
            <br/>
            <label for="population">Population: </label>
            <input value={population} onChange={(e)=>setPopulation(e.target.value)} name="population" id="population" type="number"/>
            <br/>

            <NavLink onClick={handleAddCity} to="/" className="add-city-button">Add City</NavLink>

        </div>
    )
}
export default AddCity