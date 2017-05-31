///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import StaticContent from '../../common/StaticContent/StaticContent';
import ItemContent from '../../common/ItemContent/ItemContent';
import BarChartBlock from '../../common/BarChartBlock/BarChartBlock';
import PieChartBlock from '../../common/PieChartBlock/PieChartBlock';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Страница статистики'
}

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, color: '#C51162' },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, color: '#6200EA' },
    { name: 'Page C', uv: 2000, pv: 5600, amt: 2290, color: '#2962FF' }
];
const data2 = [
    { name: 'Page A', value: 70, color: '#C51162' },
    { name: 'Page B', value: 40, color: '#6200EA' },
    { name: 'Page C', value: 135, color: '#2962FF' }
];
const dataKeys = [
    {
        name: 'uv',
        color: '#ccfccf'
    },
    {
        name: 'pv',
        color: '#000000'
    },
    {
        name: 'amt',
        color: '#e4e4e6'
    }];

///////////////////////////////////////////////////////////////////////////////
function StatisticsPage() {
    return <StaticContent {...propsPage}>
        <div className={styles.mainWrapper}>
            <div className={styles.columns}>
                <ItemContent
                    styleClass={styles.itemStatic}
                    title='Общая статистика'>
                    <div className={styles.itemContent}>
                        <BarChartBlock
                            width={400}
                            height={300}
                            data={data}
                            dataKeys={dataKeys} />
                    </div>
                </ItemContent>

                <ItemContent
                    styleClass={styles.itemStatic}
                    title='Вторая статистика'>
                    <div className={styles.itemContent}>
                        <PieChartBlock
                            width={400}
                            height={300}
                            data={data2}
                            label
                        />
                    </div>
                </ItemContent>

            </div>
        </div>
    </StaticContent>;
}

///////////////////////////////////////////////////////////////////////////////
export default StatisticsPage;

///////////////////////////////////////////////////////////////////////////////