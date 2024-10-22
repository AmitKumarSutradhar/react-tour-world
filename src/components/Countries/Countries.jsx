import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountries = country =>{
        console.log("Add this to your visited countries.");
        const newVisitedCounteries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCounteries);
    }

    const handleVisitedFlags = flag => { 
        console.log('flag adding');

        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags()
    }

    return (
        <div>
           <h3>Countries: {countries.length}</h3> 
           {/* Visited Countries  */}
           <div className="">
             <h5>Visited Countries: {visitedCountries.length}</h5>
             <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{ country.name.common }</li>)
                }
             </ul>
           </div>
           {/* Display Countries  */}
           <div className="contry-container">
            {
                countries.map(country => <Country 
                    key = {country.cca3} 
                    handleVisitedCountries = {handleVisitedCountries} 
                    country = {country}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;