import React from 'react';
import './Country.css';
const Country = (props) => {
    const { flag, name, population, region } = props.country;
    return (

        <ul className="ul">
            <li>
                <div className="flag">
                    <img src={flag} alt="" />
                </div>
                <div className="flag">
                    <h4><strong><u>Country Name: {name}</u></strong></h4>
                    <p><small>Region: {region}</small></p>
                    <p>Population: {population}</p>

                </div>
            </li>
        </ul>

    );
};

export default Country;