import React from "react"
import { useParams, useOutletContext } from 'react-router-dom';

function CityDetail(){
    const {id}=useParams()
    const cities=useOutletContext()

    const cityDetail = cities.find(city => city?.id === parseInt(id));
        
    return(
        
        cityDetail?.id ? 
            <>
            <h1>{cityDetail?.cityName} Details</h1>
            <p>Country: {cityDetail.country}</p>
            <p>Population: {cityDetail.population}</p>
            </>
            :<></>
        
    )
}
export default CityDetail