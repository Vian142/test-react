///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
function InputBlock({ onChange, value, label, placeholder = '', error, errorMsg, id, labelStyle, inputStyle }) {
    return <div className={styles.inputBlock}>
        <label
            className={classnames(styles.inputBlockLabel, labelStyle)}
            htmlFor={id}>
            {label}
        </label>
        <input
            placeholder={placeholder}
            onChange={onChange}
            className={classnames(styles.inputBlockInput, inputStyle)}
            type="text"
            id={id}
            value={value}
        />
        <div className={classnames(styles.msgBlock, { [styles.errorMsg]: error })}>{errorMsg}</div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default InputBlock;

///////////////////////////////////////////////////////////////////////////////