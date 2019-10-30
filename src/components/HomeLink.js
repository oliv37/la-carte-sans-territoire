import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.css';

function HomeLink({to, text, image}) {
	const backgroundImage = image ? `url(${image})` : 'none';

	return (
        <Link to={to} className={styles.homeLink}>
            <div className={styles.homeLinkImageContainer} style={{backgroundImage}}/>
            <p className={styles.homeLinkText}>{text}</p>
        </Link>    
    );
}

export default HomeLink;
