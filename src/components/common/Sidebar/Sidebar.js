// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
// import {Link} from 'react-router-dom';
// import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function Sidebar() {
    return <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarItemTitle}>Категории</div>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item1" />
                    <label className={styles.listLabelTitle} htmlFor="item1">Пункт 1 уровня </label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                    </ul>
                </li>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item2" />
                    <label className={styles.listLabelTitle} htmlFor="item2">Пункт 1 уровня </label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Подпункт 1 уровня и оооооочень длиннный блин</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                    </ul>
                </li>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item3" />
                    <label className={styles.listLabelTitle} htmlFor="item3">Пункт 1 уровня </label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                    </ul>
                </li>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item4" />
                    <label className={styles.listLabelTitle} htmlFor="item4">Пункт 1 уровня </label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                        <li><a href="#">Подпункт 1 уровня</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
export default Sidebar;

// /////////////////////////////////////////////////////////////////////////////
