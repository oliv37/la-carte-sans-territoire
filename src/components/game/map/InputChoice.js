import React from 'react';
import styles from './InputChoice.module.css';

function InputChoice({id, label, checked, onChange, disabled}) {
    return (
        <div className={styles.container}>
            <input 
                id={id}
                type="radio" 
                name="choice"
                className={styles.input} 
                value={label} 
                checked={checked} 
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    );
}

export default React.memo(InputChoice);
