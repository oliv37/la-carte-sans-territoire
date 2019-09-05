import React from 'react';
import InputChoice from './InputChoice';
import styles from './ListChoice.module.css';

function ListChoice({data, onChange, choiceIdSelected, idsValidated, getChoiceLabel}) {
    return (
        <div className={styles.container}>
            {data.map((item, index) => {
                const {id} = item;

                return (
                    <InputChoice 
                        key={index}
                        id={`choice${index}`}
                        label={getChoiceLabel(item)}
                        checked={choiceIdSelected === id}
                        disabled={idsValidated.includes(id)}
                        onChange={() => onChange(id)}
                    />
                );
            })}
        </div>
    );
}

export default React.memo(ListChoice);
