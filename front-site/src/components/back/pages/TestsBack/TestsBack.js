///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import StaticContent from '../../common/StaticContent/StaticContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Страница тестов'
}

///////////////////////////////////////////////////////////////////////////////
function Controls() {
    return <div>
        <span
            title='Подробнее'
            className={classnames(styles.btnControl, 'fa fa-eye')} />
        <span
            title='Отправить результаты на Email'
            className={classnames(styles.btnControl, 'fa fa-envelope-o')} />
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
function TableRow() {
    return <tr className={styles.tableItem}>
        <td className={styles.tableCell}>Основы экономики и предприятия</td>
        <td className={styles.tableCell}>Экономика</td>
        <td className={styles.tableCell}>7/10</td>
        <td className={styles.tableCellDate}>25.04.2017</td>
        <td className={classnames(styles.tableCellControl)}>
            <Controls />
        </td>
    </tr>
}


///////////////////////////////////////////////////////////////////////////////
function TestsBack() {
    return <StaticContent {...propsPage}>
        <div className={styles.mainWrapper}>
            <div className={styles.title}>Последние тесты</div>
            <table className={styles.tableContainer}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th>Название теста</th>
                        <th>Категория</th>
                        <th>Результат</th>
                        <th>Дата</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.times(28, (index) => <TableRow key={index} />)
                    }
                </tbody>
            </table>
        </div>
    </StaticContent>;
}

///////////////////////////////////////////////////////////////////////////////
export default TestsBack;

///////////////////////////////////////////////////////////////////////////////