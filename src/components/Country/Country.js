import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const flagStyle = {
        height: '100px',
        width: '150px'
    }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countryStyle">
            <h4>{name}</h4>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
            <img style={flagStyle} src={flag} alt="img" /> <br /> <br />
            <button className="buttonStyle" onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;