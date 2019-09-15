import React, {useEffect, useRef, useCallback} from 'react';
import classNames from 'classnames';
import {highlight} from '../../../constants/className';
import styles from './InputChoice.module.css';

function InputChoice({
    inputId,
    id, 
    label, 
    checked, 
    highlighted, 
    disabled, 
    onChange
}) {
    const labelRef = useRef(null);
    const labelClassName = classNames(styles.label, {[highlight]: highlighted});
    const memoizedOnChange = useCallback(() => onChange(id), [onChange, id]);

    useEffect(() => {
        if (highlighted && labelRef.current) {
            labelRef.current.scrollIntoView();
        }
    }, [highlighted]);

    return (
        <div className={styles.container}>
            <input 
                id={inputId}
                type="radio" 
                name="choice"
                className={styles.input} 
                value={label} 
                checked={checked} 
                onChange={memoizedOnChange}
                disabled={disabled}
            />
            <label ref={labelRef} htmlFor={inputId} className={labelClassName}>
                {label}
            </label>
        </div>
    );
}

export default React.memo(InputChoice);
