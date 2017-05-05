// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
const menuItems = [{
  title: 'Главная',
  url: '/',
},
{
  title: 'Тесты',
  url: '/tests',
},
{
  title: 'Материалы',
  url: '/materials',
},
{
  title: 'О проекте',
  url: '/about',
}];

// /////////////////////////////////////////////////////////////////////////////
function Menu() {
  return <nav className={styles.nav}>
        <ul className={styles.navList}>
            {
                _.map(menuItems, (item, index) => <li key={index} className={styles.navItem}>
                        <Link to={item.url} className={styles.navLink}>{item.title}</Link>
                    </li>)
            }
        </ul>
    </nav>;
}

// /////////////////////////////////////////////////////////////////////////////
export default Menu;

// /////////////////////////////////////////////////////////////////////////////
