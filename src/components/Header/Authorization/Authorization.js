///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css'
var FontAwesome = require('react-fontawesome');


///////////////////////////////////////////////////////////////////////////////
const Authorization = React.createClass({
    getInitialState(){
        return {
            shown: false,
            authorized: false
        }
    },
    toogleDropdown() {
        this.setState({
            shown: !this.state.shown
        });
    },
    render() {
        const {shown, authorized} = this.state;
        return (
            <div className={styles.authBlock}>
                {
                    (authorized) ? <div className={styles.nonAuthBlock}>
                        <span className={styles.nonAuthLink}>Регистрация</span>
                        <br/>
                        <span className={styles.nonAuthLink}>Авторизация</span>
                    </div> : <ViewAuthorized shown={shown} showDropdown={this.toogleDropdown}/>
                }
                {
                    shown && <DropdownContent/>
                }
            </div>
        );
    }
});

///////////////////////////////////////////////////////////////////////////////
function ViewAuthorized(props) {
    const { shown, showDropdown } = props;
    return <div className={styles.authUser}>
        <div className={styles.authUserAvatar}>
            <img src='http://placehold.it/100x100' className={styles.userAvatarImage}/>
        </div>
        <div className={styles.authUserInfo}>
            <span className={styles.authUserInfoItem}>Иван</span>
            <span className={styles.authUserInfoItem}>Иванович</span>
        </div>
        <div className={styles.controlsBlock}>
            <FontAwesome
                name={(shown)? 'caret-up' : 'caret-down'}
                className={styles.controlBtnAuth}
                onClick={() => showDropdown()}/>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
function DropdownContent() {
    return <div className={styles.dropdownWrapper}>
        <div className={styles.dropdown}>
            <div className={styles.dropdownItem}>
                <a href='/' className={styles.dropdownItemLink}>Профиль</a>
            </div>
            <div className={styles.dropdownItem}>
                <a href='/' className={styles.dropdownItemLink}>Выйти</a>
            </div>
        </div>
    </div>;
}
///////////////////////////////////////////////////////////////////////////////
export default Authorization;

///////////////////////////////////////////////////////////////////////////////