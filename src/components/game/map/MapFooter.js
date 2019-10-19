import React from "react";
import classNames from "classnames";
import Button from "../../common/Button";
import SuccessMessage from "./SuccessMessage";

import btnStyles from '../../common/Button.module.css';
import styles from "./MapFooter.module.css";

function MapFooter({success, error, btnDisabled}) {
	return (
		<footer className={styles.mapFooter}>
			{success && <SuccessMessage/>}
			{!success && (
				<Button 
					type="submit"
					disabled={btnDisabled}
					className={classNames({[btnStyles.error]: error})}
					children="Valider"
				/>
			)}
        </footer>
	)
}

export default MapFooter;