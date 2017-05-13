///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import LinkButton from '../../../common/LinkButton/LinkButton';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function getLevel(level) {
    const stars = _.times(
        5, (index) => <i className={classnames('fa fa-star', {[styles.iconOrange]: (level > index)})} />
    );
    return stars;
}

///////////////////////////////////////////////////////////////////////////////
function TestCard(props) {
    const { data } = props;
    return (
        <div key={data.id} className={styles.wrapperCard}>
            <div className={styles.cardTop}>
                <div title='Номер теста' className={styles.cardTopId}>#{data.id}</div>
                <div className={styles.cardTopLevel}>
                    <span title='Сложность' className={styles.testLevel}>
                        {getLevel(data.level)}
                    </span>
                </div>
            </div>
            <div className={styles.cardTitle}>{data.title}</div>
            <div className={styles.cardDescription}>{data.description}</div>
            <div className={styles.cardInfo}>
                <div className={styles.cardCategory}>
                    Категория: <a href='#' className={styles.categoryLink}>
                        {data.category}
                    </a>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <LinkButton
                    styleClass={styles.cardBtn}
                    type='link'
                    url='/'>Начать тест</LinkButton>
            </div>
        </div>
    );
}

///////////////////////////////////////////////////////////////////////////////
export default TestCard;

///////////////////////////////////////////////////////////////////////////////