///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css'


///////////////////////////////////////////////////////////////////////////////
const Authorization = React.createClass({
    getInitialState(){
        return {
            authorized: false
        }
    },
    render() {
        const {authorized} = this.state;
        return (
            <div className={styles.authBlock}>
                {
                    !authorized && <div className={styles.nonAuthBlock}>
                        <span className={styles.nonAuthLink}>Регистрация</span>
                        <br/>
                        <span className={styles.nonAuthLink}>Авторизация</span>
                    </div>
                }
            </div>
        );
    }
});

///////////////////////////////////////////////////////////////////////////////
export default Authorization;

///////////////////////////////////////////////////////////////////////////////