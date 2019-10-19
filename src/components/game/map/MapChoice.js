import React from "react";
import styles from "./MapChoice.module.css";

function MapChoice({data, onChange, mapIdSelected, idsValidated}) {
	function handleChange(e) {
		onChange(e.target.value);
	}

	return data.map(item => {
		const id = `item-${item.id}`;
		// TODO : shuffle data

		return (
			<label id={id} key={item.id} className={styles.label}>
			<input 
				htmlFor={id}
				className={styles.input}
				type="radio" 
				name="mapChoice"
				value={item.id}
				onChange={handleChange}
				checked={item.id === mapIdSelected}
				disabled={idsValidated.indexOf(item.id) !== -1}
			/>
			</label>  
		);
	});
}

export default MapChoice;
