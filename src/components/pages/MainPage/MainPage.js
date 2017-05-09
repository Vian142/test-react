// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import LinkButton from '../../common/LinkButton/LinkButton';
//import ContentHtml from '../../common/ContentHtml/ContentHtml';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function MainPage() {
    return <div className={styles.mainWrapper}>
        <section className={classnames(styles.sectionContainer, styles.container)}>
            <div className={styles.columnsBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.pictureContent}>
                        <img
                            src="http://lorempixel.com/g/500/450"
                            alt="Изображение" className={styles.pictureContentImage} />
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.contentBlock}>
                        <div className={styles.contentBlockText}>
                            <h1>Заголовок статьи</h1>
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
                                <LinkButton
                                    url={'/'}
                                    type={'link'}
                                    styleClass={styles.btnLinkBlue}
                                >
                                    Подробнее
                                </LinkButton>
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
                        <div className={styles.statisticsItemValue}>1098</div>
                        <div className={styles.statisticsItemText}>Тестов в базе</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemValue}>524</div>
                        <div className={styles.statisticsItemText}>Пройдено тестов</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemValue}>119</div>
                        <div className={styles.statisticsItemText}>Пользователей</div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsItemValue}>6985</div>
                        <div className={styles.statisticsItemText}>Дано ответов</div>
                    </div>
                </div>
            </div>
        </section>
        <section className={classnames(styles.sectionContainer, styles.container)}>
            <div className={styles.columnsBlock}>
                <div className={styles.leftBlock}>
                    <div className={styles.contentBlock}>
                        <div className={styles.contentBlockText}>
                            <h1>Заголовок статьи</h1>
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
                            src="http://lorempixel.com/g/500/450"
                            alt="Изображение" className={styles.pictureContentImage} />
                    </div>
                </div>
            </div>
        </section>
        <section className={classnames(styles.sectionContainer, styles.sectionTextBlock)}>
            <div className={classnames(styles.container)}>
                <div className={styles.sectionTextContainer}>
                    <div className={styles.sectionText}>
                        <div className={styles.sectionTextTitle}>Поиск теста</div>
                        <p>
                            Найдите любой подходящий тест для себя в архиве множества тестов сервиса.
                            Вы сможете протестировать свои навыки в ответах, и узнать что еще Вам необходимо узнать,
                            чтобы дальше двигаться в своей карьере.
                        </p>
                    </div>
                    <div className={styles.sectionTextBtnWrapper}>
                        <LinkButton
                            url={'/tests'}
                            type={'link-route'}
                            styleClass={styles.btnLinkTests}>
                            Поиск теста
                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
export default MainPage;

// /////////////////////////////////////////////////////////////////////////////
