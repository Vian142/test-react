///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import LinkButton from '../../../common/LinkButton/LinkButton';
import StaticContent from '../../../common/StaticContent/StaticContent';
import ItemContent from '../../../common/ItemContent/ItemContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const pageProps = {
    titlePage: 'Страница теста'
}

///////////////////////////////////////////////////////////////////////////////
const dataTest = {
    title: 'Тест по информационным технологиям',
    description: ' это текст-"рыба", часто используемый в печати и вэб-дизайне. ' +
    'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. ',
    category: 'Физика',
    level: '5',
    visible: false,
    questions: [
        {
            questionTitle: 'Заголовок вопроса',
            questionDescription: 'Описание вопроса',
            answers: [
                {
                    text: 'Да',
                    status: true
                },
                {
                    text: 'Нет',
                    status: false
                },
                {
                    text: 'Возможно',
                    status: false
                }
            ]
        },
        {
            questionTitle: 'Заголовок вопроса',
            questionDescription: 'Описание вопроса',
            answers: [
                {
                    text: 'Да',
                    status: true
                },
                {
                    text: 'Нет',
                    status: false
                },
                {
                    text: 'Возможно',
                    status: false
                }
            ]
        }
    ]
}

///////////////////////////////////////////////////////////////////////////////
function Answer({ answer }) {
    return <tr className={styles.answerItem}>
        <td className={styles.answerItemText}>{answer.text}</td>
        <td className={styles.answerItemStatus}>
            <i className={classnames('fa', (answer.status) ? 'fa-check' : 'fa-times')} />
        </td>
    </tr>
}

///////////////////////////////////////////////////////////////////////////////
function Ticket({ ticket }) {
    return <div className={styles.ticketBlock}>
        <div className={styles.ticketInfo}>
            <div className={classnames(styles.ticketTitle, styles.lineBottom)}>
                {ticket.questionTitle}
            </div>
            <div className={styles.ticketDescription}>
                {ticket.questionDescription}
            </div>
        </div>
        <div className={styles.ticketAnswers}>
            <div className={classnames(styles.ticketAnswersTitle, styles.lineBottom)}>Ответы:</div>
            <table className={styles.answersTable}>
                <tbody>
                    {
                        _.map(ticket.answers, (item, index) => <Answer answer={item} key={index} />)
                    }
                </tbody>
            </table>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
function TestInfo() {
    return <StaticContent {...pageProps}>
        <ItemContent>
            <div className={styles.mainWrapper}>
                <div className={styles.btnContainer}>
                    <LinkButton
                        type='link-route'
                        url='/admin/edittest'
                        styleClass={classnames(styles.btn, styles.btnGreen)}
                        icon='fa-pencil'>
                        Изменить тест
                    </LinkButton>
                    <LinkButton
                        type='link-route'
                        url='/admin/tests'
                        styleClass={classnames(styles.btn, styles.btnRed)}
                        icon='fa-reply'>
                        К тестам
                    </LinkButton>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoRow}>
                        <div className={classnames(styles.infoRowText, styles.title, styles.lineBottom)}>
                            {dataTest.title}
                        </div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.infoRowLabel}>Описание</div>
                        <div className={styles.infoRowText}>{dataTest.description}</div>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoRowLabel}>Тест активен: &nbsp;</span>
                        {(dataTest.visible) ?
                            <i className={classnames('fa fa-check', styles.statusTest, styles.statusTestTrue)}
                                title='Тест активен' /> :
                            <i className={classnames('fa fa-times-circle-o', styles.statusTest, styles.statusTestFalse)}
                                title='Тест не активен' />
                        }
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoRowLabel}>Уровень сложности: &nbsp;</span>
                        <span className={styles.infoRowText}>{dataTest.level}</span>
                    </div>
                </div>
                <div className={styles.ticketsContainer}>
                    <div className={classnames(styles.ticketsContainerTitle, styles.lineBottom)}>Вопросы</div>
                    <div className={styles.btnContainer}>
                        <LinkButton
                            type='link-route'
                            url='/editquestions'
                            styleClass={classnames(styles.btn, styles.btnBlue)}
                            icon='fa-pencil'>
                            Изменить вопросы
                    </LinkButton>
                    </div>
                    <div className={styles.ticketsList}>
                        {
                            _.map(dataTest.questions, (item, index) => <Ticket ticket={item} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </ItemContent>
    </StaticContent>
}

///////////////////////////////////////////////////////////////////////////////
export default TestInfo;

///////////////////////////////////////////////////////////////////////////////