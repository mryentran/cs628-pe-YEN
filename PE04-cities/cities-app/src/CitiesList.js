import React from "react"
import { NavLink, Outlet } from "react-router-dom"
function CitiesList({cities}){
    return(
        <div>
            <h1>Cities List</h1>
            {cities.map(city=>(
                <div key={city?.id}>
                    <NavLink activeClassName="active" key={city?.id} to={`/city/${city?.id}`}>{city?.cityName}</NavLink>
                </div>
            ))}
            <div>
            <Outlet context={cities}/>
            </div>
        </div>
    )
}
export default CitiesList