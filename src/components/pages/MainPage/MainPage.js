///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import Button from '../../common/Button/Button';
import styles from './styles.css'

///////////////////////////////////////////////////////////////////////////////
function MainPage() {
    return <div className={styles.mainWrapper}>
        <section className={classnames(styles.sectionContainer, styles.container)}>
            <div className={styles.columnsBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.pictureContent}>
                        <img
                            src="http://lorempixel.com/g/500/400"
                            alt="Изображение" className={styles.pictureContentImage} />
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.contentBlock}>
                        <div className={styles.contentBlockText}>
                            <h2>Заголовок статьи</h2>
                            <p>
                                Значимость этих проблем настолько очевидна, что реализация намеченных плановых
                                заданий позволяет оценить значение дальнейших направлений развития. Равным образом
                                укрепление и развитие структуры способствует подготовки и реализации форм развития.
                            </p>
                            <p>
                                Равным образом постоянный количественный рост и сфера нашей активности позволяет
                                выполнять важные задания по разработке дальнейших направлений развития.
                                Товарищи! рамки и место обучения кадров обеспечивает широкому кругу (специалистов)
                                участие в формировании позиций.
                            </p>
                            <p>
                                <Button
                                    url={'/'}
                                    type={'link'}
                                    size={'big'}
                                    >
                                    Подробнее
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={classnames(styles.sectionContainer)}>
            <div className={styles.statisticsBlock}>
                <div className={classnames(styles.statisticsBlockWrapper, styles.container)}>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemText}>Тестов в базе</div>
                        <div className={styles.statisticsItemValue}>1098</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemText}>Пройдено тестов</div>
                        <div className={styles.statisticsItemValue}>524</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemText}>Пользователей</div>
                        <div className={styles.statisticsItemValue}>119</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemText}>Дано ответов</div>
                        <div className={styles.statisticsItemValue}>6985</div>
                    </div>
                </div>
            </div>
        </section>
        <section className={classnames(styles.sectionContainer, styles.container)}>
            <div className={styles.columnsBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.contentBlock}>
                        <div className={styles.contentBlockText}>
                            <h2>Заголовок статьи</h2>
                            <p>
                                Значимость этих проблем настолько очевидна, что реализация намеченных плановых
                                заданий позволяет оценить значение дальнейших направлений развития. Равным образом
                                укрепление и развитие структуры способствует подготовки и реализации форм развития.
                            </p>
                            <p>
                                Равным образом постоянный количественный рост и сфера нашей активности позволяет
                                выполнять важные задания по разработке дальнейших направлений развития.
                                Товарищи! рамки и место обучения кадров обеспечивает широкому кругу (специалистов)
                                участие в формировании позиций.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.pictureContent}>
                        <img
                            src="http://lorempixel.com/g/500/400"
                            alt="Изображение" className={styles.pictureContentImage} />
                    </div>                    
                </div>
            </div>
        </section>
    </div>;
}

///////////////////////////////////////////////////////////////////////////////
export default MainPage;

///////////////////////////////////////////////////////////////////////////////