///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Sidebar from '../../../common/Sidebar/Sidebar';
import TestCard from '../TestCard/TestCard';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
const cards = [
    {
        id: '1',
        title: 'Тест',
        description: 'Описание теста 1',
        category: 'Категория 1',
        level: 1,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '2',
        title: 'Тест 2',
        description: 'Описание теста 2',
        category: 'Категория 1',
        level: 3,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '3',
        title: 'Тест 3',
        description: 'Описание теста 3',
        category: 'Категория 2',
        level: 5,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '4',
        title: 'Тест 4',
        description: 'Описание теста 4',
        category: 'Категория 1',
        level: 2,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '5',
        title: 'Тест 5',
        description: 'Описание теста 5',
        category: 'Категория 1',
        level: 4,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '6',
        title: 'Тест 6',
        description: 'Описание теста 6',
        category: 'Категория 1',
        level: 3,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: '7',
        title: 'Тест 7',
        description: 'Описание теста 7',
        category: 'Категория 1',
        level: 3,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    }
];

///////////////////////////////////////////////////////////////////////////////
function TestPage() {
    return <div className={classnames(styles.mainWrapper, 'container')}>
        <div className={styles.wrapperContainer}>
            <div className={styles.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={styles.contentContainer}>
                <h2>ТЕСТЫ</h2>
                <div className={styles.searchContainer}>
                    <div className={classnames(styles.searchBlock)}>
                        <input type="text" className={styles.searchInput} />
                        <button className={styles.searchBtn} title='Найти'>
                            <i className="fa fa-search" />
                        </button>
                    </div>
                    <div className={styles.testsList}>
                        {
                            _.map(cards, (item, index) => <TestCard key={index} data={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
export default TestPage;

///////////////////////////////////////////////////////////////////////////////