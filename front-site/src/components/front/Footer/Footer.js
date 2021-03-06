///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////

function Footer() {
    return <div className={styles.footer}>
        <div className={styles.footerContentWrapper}>
            <div className={styles.footerColumns}>
                <div className={classnames(styles.columnsItem, styles.columnsItem2)}>
                    <div className={styles.footerTitle}>Сервис Etelligence</div>
                    <div className={styles.footerLogo}>
                        Логотип
                    </div>
                    <div className={styles.footerText}>
                        Большая часть текста сделана из разделов 1.10.32–3 книги Цицерона «На грани Добра и Зла»
                        («De finibus bonorum et malorum»). «Больше нет никого из тех, кто любит скорбь, поскольку
                        это горе и поэтому хочет заполучить это». 
                    </div>
                </div>
                <div className={styles.columnsItem}>
                    <div className={styles.footerTitle}>Навигация</div>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Главная</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Материалы</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Тесты</a>
                        </li>
                        
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Авторы</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.columnsItem}>
                    <div className={styles.footerTitle}>Проект</div>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>О проекте</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Контакты</a>
                        </li>
                        <li className={styles.footerListItem}>
                            <a href='/' className={styles.footerListItemLink}>Ссылка</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footerCopyright}>Копирайты</div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default Footer;

///////////////////////////////////////////////////////////////////////////////