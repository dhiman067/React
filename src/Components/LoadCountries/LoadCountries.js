import React from 'react';
import './LoadCountries.css'

const LoadCountries = (props) => {
    return (
        <div className='country-styles'>
            <h4>name: {props.name}</h4>
            <img src={props.flags} alt="" />
            <p>area: {props.area}</p>
            <p>region: {props.region}</p>
        </div>
    );
};

export default LoadCountries;