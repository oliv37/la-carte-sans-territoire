import React from 'react';
import classNames from 'classnames';
import styles from './ResetButton.module.css';

import trash from "../../../res/trash.svg";

function ResetButton({className, animate = false, ...props}) {
    const btnClassName = classNames(
        className,
        styles.resetButton,
        {
            [styles.animate]: animate
        }
    );
    
    return (
        <button title="Recommencer" {...props} className={btnClassName} type="button">
			<img src={trash} alt="Effacer" className={styles.image}/>
        </button>
    );
}

export default ResetButton;
