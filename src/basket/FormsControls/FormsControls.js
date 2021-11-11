import React from "react";
import styles from './FormsControls.module.css'
// ({input, meta, ...props}) - деструкторизация props,
// что бы не все передовать textarea - rest оператор
export const Textarea = ({input, meta, ...props}) => {
    // props будет содержать все кромк input и meta

    const hasError =  meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: + "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <div ><span>{meta.error}</span></div>}
        </div>
    )
};



export const Input = ({input, meta, ...props}) => {
    // props будет содержать все кромк input и meta
    const hasError =  meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: + "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <div ><span>{meta.error}</span></div>}
        </div>
    )
};


