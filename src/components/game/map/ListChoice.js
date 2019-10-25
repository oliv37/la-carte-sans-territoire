import React, {useState, useEffect} from 'react';
import InputChoice from './InputChoice';
import styles from './ListChoice.module.css';

function ListChoice({
    data,
	compare,
    onChange, 
    choiceIdSelected, 
    idHighlighted,
    idsValidated, 
	getChoiceLabel,
}) {
	const [dataSorted, setDataSorted] = useState([]);

	useEffect(() => {
		if (compare) {
			setDataSorted([...data].sort(compare));
		} else {
			setDataSorted(data);
		}
	}, [data, compare]);

    return (
        <div className={styles.container}>
            {dataSorted.map((item, index) => {
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
