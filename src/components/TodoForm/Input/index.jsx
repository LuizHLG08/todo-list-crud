import { forwardRef } from "react";
import styles from "./style.module.scss"

export const Input = forwardRef(({ label, error, ...rest }, ref) => {

    return (
        <label className={styles.inputContainer}>
            {label}
            <input ref={ref} {...rest} className={error ? 'inputError' : null}/>
            {error ? <p className={styles.error}>{error.message}</p> : null}
        </label>
    )
})