import React from 'react';
import styles from './styles.css';

function Menu() {
    return <nav>
        <ul className={styles.navList}>
            <li className={styles.navItem}>Пункт 1</li>
            <li className={styles.navItem}>Пункт 2</li>
            <li className={styles.navItem}>Пункт 3</li>
            <li className={styles.navItem}>Пункт 4</li>
        </ul>
    </nav>;
}

export default Menu;