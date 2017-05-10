///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Sidebar from '../../../common/Sidebar/Sidebar';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function TestPage() {
    return <div className={styles.mainWrapper}>
        <div className={styles.wrapperContainer}>
            <div className={styles.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={styles.contentContainer}>
                <h2>ТЕСТЫ</h2>
                <div className={styles.searchContainer}>
                    <div className={styles.searchBlock}>
                        <input type="text" className={styles.searchInput} />
                        <button className={styles.searchBtn} title='Найти'>
                            <i className="fa fa-search" />
                        </button>
                    </div>
                    <div className={styles.testList}>
                        <div className={styles.itemTest}>Тест</div>
                        <div className={styles.itemTest}>Тест</div>
                        <div className={styles.itemTest}>Тест</div>
                        <div className={styles.itemTest}>Тест</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
export default TestPage;

///////////////////////////////////////////////////////////////////////////////