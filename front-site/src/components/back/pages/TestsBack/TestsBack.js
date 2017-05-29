///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import LinkButton from '../../common/LinkButton/LinkButton';
import StaticContent from '../../common/StaticContent/StaticContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Страница последних тестов'
}

///////////////////////////////////////////////////////////////////////////////
function Controls() {
    return <div>
        <LinkButton
            title='Подробнее'
            icon='fa-eye'
            url='/admin/test/1'
            classStyle={classnames(styles.btnControl)}
        />
        <span
            title='Отправить результаты на Email'
            className={classnames(styles.btnControl, 'fa fa-envelope-o')} />
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
function TableRow() {
    return <tr className={styles.tableItem}>
        <td className={styles.tableCell}>
            <Link
                to='/admin/tests'
                title='Подробнее'
                className={styles.tableItemLink}>Основы экономики и предприятия</Link>
        </td>
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
            <div className={styles.btnWrapper}>
                <LinkButton
                    title='На главную'
                    icon='fa-reply'
                    url='/admin/'
                    styleClass={classnames(styles.btn, styles.btnBlue)}>
                    На главную
                </LinkButton>
            </div>
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