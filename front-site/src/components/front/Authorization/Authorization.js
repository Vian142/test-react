// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import styles from './styles.css';
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
// /////////////////////////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////
function ViewAuthorized(props) {
    const { shown = false, showDropdown } = props;
    return (
        <div className={styles.authUser}>
            <div className={styles.authUserAvatar}>
                <img src="http://placehold.it/100x100" className={styles.userAvatarImage} />
            </div>
            <div className={styles.authUserInfo}>
                <span className={styles.authUserInfoItem}>Иван</span>
                <span className={styles.authUserInfoItem}>Иванович</span>
            </div>
            <div className={styles.controlsBlock}>
                <i
                    className={classnames(
                        styles.controlBtnAuth, 'fa',
                        (shown) ? 'fa-caret-up' : 'fa-caret-down')}
                    onClick={() => showDropdown()} />
            </div>
        </div>
    );
}

// /////////////////////////////////////////////////////////////////////////////
function DropdownContent(props) {
    const { logOut } = props;
    return <div className={styles.dropdownWrapper}>
        <div className={styles.dropdown}>
            <div className={styles.dropdownItem}>
                <a href="/admin" className={styles.dropdownItemLink}>Профиль</a>
            </div>
            <div className={styles.dropdownItem}>
                <span
                    className={styles.dropdownItemLink}
                    onClick={() => logOut()}>Выйти</span>
            </div>
        </div>
    </div>;
}
// /////////////////////////////////////////////////////////////////////////////
const Authorization = createReactClass({
    getInitialState() {
        return {
            shown: false,
            authorized: true
        };
    },
    toogleDropdown() {
        this.setState({
            shown: !this.state.shown
        });
    },
    render() {
        const { toogleSign, toogleReg } = this.props;
        const { shown, authorized } = this.state;
        return (
            <div className={styles.authBlock}>
                {
                    (authorized) ?
                        <ViewAuthorized
                            shown={shown}
                            showDropdown={this.toogleDropdown}
                            authorized={authorized} /> :
                        <div className={styles.nonAuthBlock}>
                            <span
                                onClick={() => toogleReg()}
                                className={styles.nonAuthItem}>
                                Регистрация&#8194;
                                <i className={classnames('fa', 'fa-users')} />
                            </span>
                            <span
                                onClick={() => toogleSign()}
                                className={styles.nonAuthItem}>
                                Авторизация&#8194;
                                <i className={classnames('fa', 'fa-sign-in')} />
                            </span>
                        </div>
                }
                {
                    shown && <DropdownContent />
                }
            </div>
        );
    },
});
// /////////////////////////////////////////////////////////////////////////////
export default Authorization;

// /////////////////////////////////////////////////////////////////////////////
