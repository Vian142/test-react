///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function TestPage() {
    return <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
            <div className={styles.searchBlock}>
                <input type="text" className={styles.searchInput} />
                <button className={styles.searchBtn} title='Найти'>
                    <i className="fa fa-search"/>
                </button>
            </div>
            <div className={styles.testList}>
                <div className={styles.itemTest}>Тест</div>
                <div className={styles.itemTest}>Тест</div>
                <div className={styles.itemTest}>Тест</div>
                <div className={styles.itemTest}>Тест</div>
            </div>
        </div>
    </div>;
};

///////////////////////////////////////////////////////////////////////////////
export default TestPage;

///////////////////////////////////////////////////////////////////////////////