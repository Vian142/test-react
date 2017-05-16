///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import StaticContent from '../../common/StaticContent/StaticContent';
import ItemContent from '../../common/ItemContent/ItemContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Страница статистики'
}

///////////////////////////////////////////////////////////////////////////////
function StatisticsPage() {
    return <StaticContent {...propsPage}>
        <div className={styles.mainWrapper}>
            <div className={styles.columns}>
                <ItemContent styleClass={styles.itemStatic}>
                    <div className={styles.itemTitle}>
                        Блок статистики
                    </div>
                    <div className={styles.itemContent}>
                        
                    </div>
                </ItemContent>
            </div>
        </div>
    </StaticContent>;
}

///////////////////////////////////////////////////////////////////////////////
export default StatisticsPage;

///////////////////////////////////////////////////////////////////////////////