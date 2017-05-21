// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function Header() {
    return <div className={classnames(styles.header)}>
        <div className={styles.headerWrapper}>
            <div className={styles.headerItem}>
                <a href='/' className={styles.headerLinkBack}>Перейти на сайт</a>
            </div>
        </div>
    </div>
}

// /////////////////////////////////////////////////////////////////////////////
export default Header;


