import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../appData';

function Home() {
    return (
        <ul className="home-container">
        {
            appData.map(({id, routePath, description}, index) => (
                <li key={index}>
                    <Link to={routePath}>{description}</Link>    
                </li>
            ))
        }
        </ul>
    );
}

export default Home;
