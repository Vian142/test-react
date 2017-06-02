///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import { fetchTests } from '../../../../../actions/index';
import _ from 'lodash';
import classnames from 'classnames';
import Sidebar from '../../../common/Sidebar/Sidebar';
import TitlePage from '../../../common/TitlePage/TitlePage';
import TestCard from '../TestCard/TestCard';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
const TestPage = createReactClass({
    componentWillMount() {
        this.props.fetchTests();
    },
    renderTests(tests) {
        console.log(tests);
        _.map(tests, (test, index) => <TestCard key={index} data={test} />)
    },
    render() {
        return <div className={classnames(styles.mainWrapper, 'container')}>
            <div className={styles.wrapperContainer}>
                <div className={styles.sidebarContainer}>
                    <Sidebar />
                </div>
                <div className={styles.contentContainer}>
                    <TitlePage>Страница тестов</TitlePage>
                    <div className={styles.searchContainer}>
                        <div className={classnames(styles.searchBlock)}>
                            <input type="text" className={styles.searchInput} />
                            <button className={styles.searchBtn} title='Найти'>
                                <i className="fa fa-search" />
                            </button>
                        </div>
                        {
                            <div className={styles.testsList}>
                                {
                                    this.renderTests(this.props.tests)
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    }
})

const mapStateToProps = function(state) {
    return { tests: state.tests.all };
}

///////////////////////////////////////////////////////////////////////////////
export default connect(mapStateToProps, { fetchTests })(TestPage);
///////////////////////////////////////////////////////////////////////////////