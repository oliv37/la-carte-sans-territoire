import React from "react";
import classNames from "classnames";
import ResetButton from "./ResetButton";
import styles from "./MapTitle.module.css";

function MapTitle({title, showResetButton, onClickResetButton, animateResetButton}) {
	return (
		<p className={styles.mapTitle}>
			{title}
			<ResetButton 
				className={classNames({[styles.hidden]: !showResetButton})}
				animate={animateResetButton} 
				onClick={onClickResetButton}
			/>
        </p>
	);
}

export default MapTitle;
