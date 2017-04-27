///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css';
import Menu from './Menu/Menu';
import Authorization from './Authorization/Authorization'

///////////////////////////////////////////////////////////////////////////////
function Header() {
    return <div className={styles.mainHeader}>
        <div className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>Лого</div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
            <div className={styles.authWrapper}>
                <Authorization />
            </div>
        </div>
    </div>
};

///////////////////////////////////////////////////////////////////////////////
export default Header;

///////////////////////////////////////////////////////////////////////////////