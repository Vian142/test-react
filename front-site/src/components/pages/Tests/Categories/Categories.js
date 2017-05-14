///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import LinkButton from '../../../common/LinkButton/LinkButton';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function CategoryItem() {
    return <div className={styles.categoryItem}>
        <div className={styles.categoryTitle}>Заголовок категории</div>
        <div className={styles.categoryDescription}>Описание категории</div>
        <div className={styles.categoryTests}>
            <span className={styles.testsValue}>75</span> <br/> тестов
        </div>
        <div className={styles.categoryBtnWrapper}>
            <LinkButton
                styleClass={styles.categoryBtn}
                url='/'
                type='link-route'>
                Перейти к тестам
            </LinkButton>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
function Categories() {
    return <div className={styles.mainWrapper}>
        <div className={classnames(styles.categoriesWrapper)}>
            {
                _.times(13, (index) => <CategoryItem key={index}/>)
            }
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default Categories;

///////////////////////////////////////////////////////////////////////////////