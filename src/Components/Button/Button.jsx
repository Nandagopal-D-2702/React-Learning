import React from "react";
import styles from "./Button.module.css";

export const Button = ({ 
    label, 
    onClick, 
    variant = "primary",
    disabled = false,
    type = "button",
    ...rest }) => {
        // Defensive check : warn of label is missing
        if (!label && process.env.NODE_ENV !== "production"){
            console.warn("Button rendered without a label - check your usage.");
        }

    // compute class names
    const classNames = [
        styles.button,
        styles[variant],
        disabled ? styles.disabled : ''
    ].join(' ').trim();

    return (
        <button 
        className={classNames} 
        type={type} 
        onClick={disabled ? undefined : onClick} 
        disabled={disabled} 
        {...rest} >
            {label}
        </button>
    );
};