import React from 'react';
import classNames from 'classnames';
import styles from './ResetButton.module.css';

function ResetButton({className, blink = false, ...props}) {
    const btnClassName = classNames(
        className,
        styles.resetButton,
        {
            [styles.blink]: blink
        }
    );
    
    return (
        <button title="Recommencer" {...props} className={btnClassName} type="button">
            {'\u27F3'}
        </button>
    );
}

export default ResetButton;
