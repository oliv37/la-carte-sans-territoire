import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../appData';
import styles from './Home.module.css';

function Home() {
    return (
        <ul className={styles.container}>
        {
            appData.map(({id, routePath, description}) => (
                <li key={id} className={styles.item}>
                    <Link to={routePath}>{description}</Link>    
                </li>
            ))
        }
        </ul>
    );
}

export default Home;
