///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Menu from './Menu/Menu';
import Authorization from '../common//Authorization/Authorization';
import logoImage from './logo.png';
import styles from './styles.css';


///////////////////////////////////////////////////////////////////////////////
function Header(props) {
    const {toogleSign} = props;
    return <div className={styles.mainHeader}>
        <div className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
                <a href='/' title='На главную' className={styles.logotype}>
                    <img
                        src={logoImage}
                        alt='Логотип'
                        className={styles.logotypeImage} />
                </a>
            </div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
            <div className={styles.authWrapper}>
                <Authorization toogleSign={toogleSign}/>
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default Header;

///////////////////////////////////////////////////////////////////////////////