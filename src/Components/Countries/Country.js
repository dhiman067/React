import React, { useEffect, useState } from 'react';
import LoadCountries from '../LoadCountries/LoadCountries';
import './country.css'

const Country = () => {
    const[countries , setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h1 >Countries</h1>
           
           <div className='country'>
           {
                countries.map(country => <LoadCountries name ={country.name.common} area = {country.area} region={country.region} flags ={country.flags.png}></LoadCountries>)
            }
           </div>
           
        </div>
    );
};

export default Country;