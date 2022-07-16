import './BorderWrapper.css';
import '../CommonCss.css'
import React from 'react'

const BorderWrapper = (props) => {
    const classes = `border-wrapper center ${props.className}`;

    return (
        <div className={classes} >
            {props.children}
        </div >
    );
}

export default BorderWrapper;