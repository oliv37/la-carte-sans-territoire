import React from "react";
import classNames from "classnames";
import styles from "./MapSourceLink.module.css";

function MapSourceLink({url}) {
	const className = classNames(styles.link, styles.external);
	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className={className}>
			source
		</a>
	);
}

export default MapSourceLink;
