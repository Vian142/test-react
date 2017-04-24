import React from 'react';
import styles from './styles.css';
import Menu from '../Menu/Menu';

function Header(){
    return <div className={styles.header}>
        <div className={styles.logoWrapper}>Лого</div>
        <div className={styles.menuWrap}>
            <Menu/>
        </div>
    </div>
};

export default Header;