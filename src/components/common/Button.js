import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

function Button({className, type = "button", ...props}) {
    const btnClassName = classNames(className, styles.button);
    return <button {...props} className={btnClassName} type={type}/>
}

export default React.memo(Button);
