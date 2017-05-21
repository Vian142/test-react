// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function Menu() {
    return <div className={styles.menu}>
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
                <Link to='/admin' className={styles.menuLink}>
                    <i className={classnames('fa fa-home', styles.menuIcon)} />
                    <span className={styles.menuLinkText}>Главная</span>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to='/admin/tests' className={styles.menuLink}>
                    <i className={classnames('fa fa-id-card-o', styles.menuIcon)} />
                    <span className={styles.menuLinkText}>Тесты</span>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to='/admin/statistics' className={styles.menuLink}>
                    <i className={classnames('fa fa-bar-chart', styles.menuIcon)} />
                    <span className={styles.menuLinkText}>Статистика</span>
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to='/admin/profile' className={styles.menuLink}>
                    <i className={classnames('fa fa-user-o', styles.menuIcon)} />
                    <span className={styles.menuLinkText}>Профиль</span>
                </Link>
            </li>
        </ul>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
function Sidebar() {
    return <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarLogo}>
            Логотип
        </div>
        <div className={styles.sidebarItems}>
            <Menu />
        </div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
export default Sidebar;
// /////////////////////////////////////////////////////////////////////////////