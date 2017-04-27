///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const menuItems = [{
    title: 'Главная',
    url: '/'
},
{
    title: 'Тесты',
    url: '/'
},
{
    title: 'Материалы',
    url: '/'
},
{
    title: 'О проекте',
    url: '/'
}];

///////////////////////////////////////////////////////////////////////////////
function Menu() {
    return <nav className={styles.nav}>
        <ul className={styles.navList}>
            {
                _.map(menuItems, (item, index) => <li key={index} className={styles.navItem}>
                        <a href={item.url} className={styles.navLink}>{item.title}</a>
                    </li>)
            }
        </ul>
    </nav>;
}

///////////////////////////////////////////////////////////////////////////////
export default Menu;

///////////////////////////////////////////////////////////////////////////////