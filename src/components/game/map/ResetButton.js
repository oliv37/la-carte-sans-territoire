import React from 'react';
import classNames from 'classnames';
import styles from './ResetButton.module.css';

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
			<img src="img/trash-alt.svg" alt="" className={styles.image}/>
        </button>
    );
}

export default ResetButton;
