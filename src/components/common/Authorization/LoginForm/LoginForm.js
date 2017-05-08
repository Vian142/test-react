// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';
// /////////////////////////////////////////////////////////////////////////////
function LoginForm(props) {
    const { toogleSign } = props;
    return (
        <div className={styles.mainWrapperLogin}>
            <div className={styles.loginForm}>
                <span className={styles.btnCloseWrapper}>
                    <i className={classnames(styles.btnClose, 'fa fa-times')}
                        title='Закрыть'
                        onClick={() => toogleSign()} />
                </span>
                <div className={styles.titleForm}>Авторизуйтесь</div>
                <div className={styles.formWrapper}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='login'
                            className={styles.inputGroupLabel}>Ваш логин</label>
                        <input
                            id='login'
                            type='text'
                            className={styles.inputGroupInput}
                            placeholder='Логин' />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'
                            className={styles.inputGroupLabel}>Ваш пароль</label>
                        <input
                            id='password'
                            type='password'
                            className={styles.inputGroupInput}
                            placeholder='Введите пароль'/>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button
                            className={styles.btnForm}>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// /////////////////////////////////////////////////////////////////////////////
export default LoginForm;

// /////////////////////////////////////////////////////////////////////////////