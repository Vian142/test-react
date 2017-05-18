///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import StaticContent from '../../common/StaticContent/StaticContent';
import ItemContent from '../../common/ItemContent/ItemContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Страница статистики'
}

const data = [
    { name: 'Group A', value: 32 },
    { name: 'Group B', value: 10 }];
const colors = ['#1cc331', '#DD1C1A'];


///////////////////////////////////////////////////////////////////////////////
function StatisticsPage() {
    return <StaticContent {...propsPage}>
        <div className={styles.mainWrapper}>
            <div className={styles.columns}>
                <ItemContent
                    styleClass={styles.itemStatic}
                    title='Общая статистика'>
                    <div className={styles.itemContent}>
                        <PieChart width={240} height={300}>
                            <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                    </div>
                </ItemContent>
            </div>
        </div>
    </StaticContent>;
}

///////////////////////////////////////////////////////////////////////////////
export default StatisticsPage;

///////////////////////////////////////////////////////////////////////////////