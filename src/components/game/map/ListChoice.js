import React from 'react';
import InputChoice from './InputChoice';
import styles from './ListChoice.module.css';

function ListChoice({
    data, 
    onChange, 
    choiceIdSelected, 
    idHighlighted,
    idsValidated, 
    getChoiceLabel
}) {
    return (
        <div className={styles.container}>
            {data.map((item, index) => {
                const {id} = item;

                return (
                    <InputChoice 
                        key={index}
                        inputId={`choice${index}`}
                        id={id}
                        label={getChoiceLabel(item)}
                        checked={choiceIdSelected === id}
                        highlighted={idHighlighted === id}
                        disabled={idsValidated.includes(id)}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
}

export default React.memo(ListChoice);
