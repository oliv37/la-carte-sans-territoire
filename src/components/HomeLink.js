import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.css';

function HomeLink({to, text, image}) {
    const imageStyle = image && {"backgroundImage": `url(${image})`};
    
    return (
        <Link to={to} className={styles.homeLink}>
            <div className={styles.homeLinkImageContainer} style={imageStyle}/>
            <p className={styles.homeLinkText}>{text}</p>
        </Link>    
    );
}

export default HomeLink;
