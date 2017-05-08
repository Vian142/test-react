// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';
// /////////////////////////////////////////////////////////////////////////////
function RegistrationForm(){
    return <div className={styles.mainWrapper}>
        <div className={styles.containerForm}>
            <span className={styles.btnCloseWrapper}>
                    <i className={classnames(styles.btnClose, 'fa fa-times')}/>
                </span>
            <div className={styles.title}>Зарегистрироваться</div>
            <div className={styles.formWrapper}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='name'
                            className={styles.inputGroupLabel}>Ваше имя</label>
                        <input
                            id='name'
                            type='text'
                            className={styles.inputGroupInput}
                            placeholder='Ваше имя' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'
                            className={styles.inputGroupLabel}>Ваш email</label>
                        <input
                            id='email'
                            type='email'
                            className={styles.inputGroupInput}
                            placeholder='Введите email'/>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button
                            className={styles.btnForm}>Зарегистрироваться</button>
                    </div>
                </div>
        </div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
export default RegistrationForm;

// /////////////////////////////////////////////////////////////////////////////