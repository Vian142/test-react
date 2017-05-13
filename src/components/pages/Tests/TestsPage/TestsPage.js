///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Sidebar from '../../../common/Sidebar/Sidebar';
import TitlePage from '../../../common/TitlePage/TitlePage';
import TestCard from '../TestCard/TestCard';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
const cards = [
    {
        id: 1,
        title: 'Анализ и моделирование финансово-экономических систем',
        description: 'Lorem Ipsum - это текст-"рыба", часто' +
        'используемый в печати и вэб-дизайне. Lorem Ipsum является.',
        category: 'Антикризисное управление',
        level: 1,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 2,
        title: 'Интегрированные информационные системы (ERP-системы) в экономике',
        description: 'Есть много вариантов Lorem Ipsum, но большинство из них'+
        'имеет не всегда приемлемые модификации, например, юмористические вставки или слова',
        category: 'Экономика',
        level: 3,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 3,
        title: 'Контроллинг на предприятии',
        description: 'Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором.',
        category: 'Микроэкономика',
        level: 5,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 4,
        title: 'Логическое мышление',
        description: 'Этот трактат по теории этики был очень популярен в эпоху Возрождения.',
        category: 'Философия',
        level: 2,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 5,
        title: 'Математический и естественнонаучный цикл 40-50',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.',
        category: 'Линейная алгебра',
        level: 4,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 6,
        title: 'Маркетинг',
        description: 'Этот трактат по теории этики был очень популярен в эпоху Возрождения.',
        category: 'Микроэкономика',
        level: 3,
        image: 'http://lorempixel.com/150/200',
        url: '/'
    },
    {
        id: 7,
        title: 'Организация и планирование деятельности организаций (предприятия)',
        description: 'Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений.',
        category: 'Экономика',
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
                <TitlePage>Страница тестов</TitlePage>
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