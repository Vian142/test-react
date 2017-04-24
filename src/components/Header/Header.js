///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css';
import Menu from './Menu/Menu';
import Authorization from '../common/Authorization/Authorization'

///////////////////////////////////////////////////////////////////////////////
function Header(){
    return <div className={styles.header}>
        <div className={styles.logoWrapper}>Лого</div>
        <div className={styles.menuWrapper}>
            <Menu/>
        </div>
        <div className={styles.authWrapper}>
            <Authorization/>
        </div>
    </div>
};

///////////////////////////////////////////////////////////////////////////////
export default Header;

///////////////////////////////////////////////////////////////////////////////