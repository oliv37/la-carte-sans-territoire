import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

function Button(props) {
    const className = classNames(props.className, styles.button);
    return <button {...props} className={className} type="button"/>
}

export default React.memo(Button);
