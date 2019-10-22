import React from 'react';
import appData from '../data/appData';
import styles from './Home.module.css';
import HomeLink from './HomeLink';

function Home() {
    return (
        <ul className={styles.container}>
        {
            appData.map(({id, routePath, title, image}) => (
                <li key={id} className={styles.item}>
                    <HomeLink to={routePath} text={title} image={image}/>
                </li>
            ))
        }
        </ul>
    );
}

export default Home;
