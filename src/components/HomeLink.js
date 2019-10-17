import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.css';

function HomeLink({to, text, imageModule}) {
    const [imageUrl, setImageUrl] = useState(undefined);
    
    // TODO: ne plus charger de module et mettre une simple image
    useEffect(() => {
        imageModule.then(({default: imageUrl}) => setImageUrl(imageUrl));
    }, [imageModule]);

    const imageStyle = imageUrl && {"backgroundImage": `url(${imageUrl})`};
    
    return (
        <Link to={to} className={styles.homeLink}>
            <div className={styles.homeLinkImageContainer} style={imageStyle}/>
            <p className={styles.homeLinkText}>{text}</p>
        </Link>    
    );
}

export default HomeLink;
