import React from 'react';
import styles from './ResetButton.module.css';

function ResetButton(props) {
    return (
        <button {...props} title="Recommencer" className={styles.resetButton}>
            {'\uD83D\uDDD1'}
        </button>
    );
}

export default ResetButton;
