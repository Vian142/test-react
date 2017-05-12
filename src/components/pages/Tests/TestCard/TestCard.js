///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import LinkButton from '../../../common/LinkButton/LinkButton';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function getLevel(level) {
    const stars = _.times(
        level, () => <i className={classnames('fa', 'fa-star')} />
    );
    return stars;
}

///////////////////////////////////////////////////////////////////////////////
function TestCard(props) {
    const { data } = props;
    return <div className={styles.wrapperCard}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardDescription}>{data.description}</div>
        <div className={styles.cardInfo}>
            <div className={styles.cardCategory}>
                Категория: <a href='#' className={styles.categoryLink}>
                    {data.category}
                </a>
            </div>
            <div className={styles.level}>
                Сложность: {
                    getLevel(data.level)
                }
            </div>
        </div>
        <div className={styles.btnWrapper}>
            <LinkButton
                styleClass={styles.cardBtn}    
                type='link'
                url='/'>Перейти</LinkButton>
        </div>
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
export default TestCard;

///////////////////////////////////////////////////////////////////////////////