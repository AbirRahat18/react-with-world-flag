import React, { use, useState } from 'react';
import Country from '../country/Country';
import "./Countries.css"


const Countries = ({Countryfetch}) => {
    const [VisitedCountry, SetVisitedCountry]=useState([])
    const [VisitedFlags, SetVisitedfalgs]=useState([])

const HandleVisitedCountry =(country)=>{
   const NewVisitedlist = [...VisitedCountry , country]
   SetVisitedCountry(NewVisitedlist)
}

const HandleFlags=(flags)=>{
    const NewVisiteFlag = [...VisitedFlags , flags]
    SetVisitedfalgs(NewVisiteFlag)
}
    const Getuse = use(Countryfetch)
    const GetCountries = Getuse.countries
    
    return (
        <div >
            <h2>
                leangth : {GetCountries.length}
                  </h2>
                  <h2>flags visited: {VisitedFlags.length}</h2>
                  <h2>visited country : {VisitedCountry.length}</h2>
                  <ol>
                  {VisitedCountry.map(country => <li> common: {country.name.common}</li>)}
                  </ol>
                <div style={{width:""}} className='ImgSizing'>
                     {
                    VisitedFlags.map((flags , index) => <img key={index} src={flags}></img>)
                 }
                </div>
               <div className='etCountries'>
                 {
                    GetCountries.map(ountry =>  <Country key={ountry.ccn3.ccn3} ountry={ountry} HandleFlags={HandleFlags} HandleVisitedCountry={HandleVisitedCountry}></Country>)
                }
               </div>
          
        </div>
    );
};

export default Countries;