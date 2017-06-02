///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTests } from '../../../../actions/index';
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
function TableRow({ data }) {
    return <tr className={styles.tableItem}>
        <td className={styles.tableCell}>
            <Link
                to='/admin/tests'
                title='Подробнее'
                className={styles.tableItemLink}>{data.title}</Link>
        </td>
        <td className={styles.tableCell}>{data.category}</td>
        <td className={styles.tableCell}>7/10</td>
        <td className={styles.tableCellDate}>25.04.2017</td>
        <td className={classnames(styles.tableCellControl)}>
            <Controls />
        </td>
    </tr>
}


///////////////////////////////////////////////////////////////////////////////
const TestsBack = createReactClass({
    componentWillMount(){
        this.props.fetchTests();
    },
    renderTests(tests) {
        _.map(tests, (test, index) => <TableRow key={index} test={test} />)
    },
    render() {
        const { tests } = this.props;
        return <StaticContent {...propsPage}>
            <div className={styles.mainWrapper}>
                <div className={styles.btnWrapper}>
                    <LinkButton
                        type='link-route'
                        title='На главную'
                        icon='fa-reply'
                        url='/admin/'
                        styleClass={classnames(styles.btn, styles.btnBlue)}>
                        На главную
                </LinkButton>
                    <LinkButton
                        title='Добавить'
                        type='link-route'
                        icon='fa-plus'
                        url='/admin/addtest'
                        styleClass={classnames(styles.btn, styles.btnGreen)}>
                        Добавить тест
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
                            console.log('Пропсы', tests)
                        }
                        {
                            this.renderTests(tests)
                        }
                    </tbody>
                </table>
            </div>
        </StaticContent>;
    }
})



const mapStateToProps = function(state) {
    return { tests: state.tests.all };
}

///////////////////////////////////////////////////////////////////////////////
export default connect(mapStateToProps, { fetchTests })(TestsBack);

///////////////////////////////////////////////////////////////////////////////