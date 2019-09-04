import React from 'react';

function InputChoice({id, label, checked, onChange, disabled}) {
    return (
        <div>
            <input 
                id={id}
                type="radio" 
                name="choice" 
                value={label} 
                checked={checked} 
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default React.memo(InputChoice);
