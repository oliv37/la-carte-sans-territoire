import React from 'react';
import InputChoice from './InputChoice';

function Choices({data, onChange, choiceIdSelected, idsValidated}) {
    return (
        <div className="choices-container">
            {data.map(({id, label}, index) => (
                <InputChoice 
                    key={index}
                    id={`choice${index}`}
                    label={`${id} ${label}`}
                    checked={choiceIdSelected === id}
                    disabled={idsValidated.includes(id)}
                    onChange={() => onChange(id)}
                />
            ))}
        </div>
    );
}

export default React.memo(Choices);
