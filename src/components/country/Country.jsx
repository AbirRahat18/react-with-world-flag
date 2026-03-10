import React, { useState } from 'react';
import "./Country.css"
const Country = ({ountry ,HandleVisitedCountry,HandleFlags}) => {

//    console.log(ountry.ccn3.ccn3)

    const [visit , setvisit]=useState(false)
    const handleevent =()=>{
        setvisit(visit ? false : true)

        HandleVisitedCountry(ountry)
    }
    return (
        <div className={`Country ${visit ? "country-css" :"Country"}`}>
            <img src={ountry?.flags?.flags?.png} alt={ountry.flags.flags.alt}></img>
            <h2>name: {ountry.name.common}</h2>
           
            <p> population: {ountry.population.population} /  {ountry.population.population > 3000000 ? "it is big ": "it is small"}</p>
            <button onClick={handleevent}>
                {visit ? "visited" :" visite"}
            </button>
            <button onClick={()=>{HandleFlags(ountry?.flags?.flags?.png)}}> add flag</button>
        </div>
    );
};

export default Country;