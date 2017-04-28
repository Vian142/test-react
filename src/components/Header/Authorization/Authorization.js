///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css'
var FontAwesome = require('react-fontawesome');


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
                    (authorized) ? <div className={styles.nonAuthBlock}>
                        <span className={styles.nonAuthLink}>Регистрация</span>
                        <br/>
                        <span className={styles.nonAuthLink}>Авторизация</span>
                    </div> : <ViewAuthorized/>
                }
            </div>
        );
    }
});

///////////////////////////////////////////////////////////////////////////////
function ViewAuthorized() {
    return <div className={styles.authUser}>
        <div className={styles.authUserAvatar}>
            <img src='http://placehold.it/100x100' className={styles.userAvatarImage}/>
        </div>
        <div className={styles.authUserInfo}>
            <span className={styles.authUserInfoItem}>Иван</span>
            <span className={styles.authUserInfoItem}>Иванович</span>
        </div>
        <div className={styles.controlsBlock}>
                <FontAwesome name='caret-down' className={styles.controlBtnAuth}/>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default Authorization;

///////////////////////////////////////////////////////////////////////////////