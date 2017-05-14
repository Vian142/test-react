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
                    <label className={styles.listLabelTitle} htmlFor="item1">Иностранные языки</label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Английский язык</a></li>
                        <li><a href="#">Немецкий язык</a></li>
                        <li><a href="#">Французский язык</a></li>
                        <li><a href="/">Португальский</a></li>
                    </ul>
                </li>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item2" />
                    <label className={styles.listLabelTitle} htmlFor="item2">История</label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Основы археологии</a></li>
                        <li><a href="#">Основы этнологии</a></li>
                        <li><a href="#">История первобытного общества</a></li>
                        <li><a href="#">история России до начала XIX</a></li>
                        <li><a href="#">История нового времени стран Европы и
                            Америки (середина XVII в. - 1918 г.)</a></li>
                        <li><a href="#">стран Азии и Африки в новое и новейшее время</a></li>
                    </ul>
                </li>
                <li className={styles.sidebarListItem}>
                    <input type="checkbox" id="item3" />
                    <label className={styles.listLabelTitle} htmlFor="item3">Экономика</label>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Антикризисное управление</a></li>
                        <li><a href="#">Бухгалтерский учет и анализ</a></li>
                        <li><a href="#">Деньги, кредит, банки</a></li>
                        <li><a href="#">Институциональная экономика</a></li>
                        <li><a href="#">Экономика и организация инновационной деятельности</a></li>
                        <li><a href="#">Экономика качества</a></li>
                        <li><a href="/">Экономика организаций (предприятия)</a></li>
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
