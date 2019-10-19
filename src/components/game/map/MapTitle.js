import React from "react";
import ResetButton from "./ResetButton";
import styles from "./MapTitle.module.css";

function MapTitle({title, showResetButton, onClickResetButton, animateResetButton}) {
	return (
		<p className={styles.mapTitle}>
        	{title}
            {showResetButton &&
				<ResetButton animate={animateResetButton} onClick={onClickResetButton}/>
            }
        </p>
	);
}

export default MapTitle;
