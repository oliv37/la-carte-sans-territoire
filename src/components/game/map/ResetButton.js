import React from 'react';
import styles from './ResetButton.module.css';

function ResetButton(props) {
    return (
        <button {...props} title="Recommencer" className={styles.resetButton}>
            {'\u27F3'}
        </button>
    );
}

export default ResetButton;
