import React from "react";
import ResetButton from "./ResetButton";
import styles from "./MapTitle.module.css";

function MapTitle({title, showResetButton, onClickResetButton, blinkResetButton}) {
	return (
		<p className={styles.mapTitle}>
        	{title}
            {showResetButton &&
				<ResetButton blink={blinkResetButton} onClick={onClickResetButton}/>
            }
        </p>
	);
}

export default MapTitle;
