///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import createReactClass from 'create-react-class';
import InputBlock from '../../../../common/InputBlock/InputBlock';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////
const AddAnswerForm = createReactClass({
    getInitialState() {
        return {
            answerText: '',
            answerCheck: false
        }
    },
    setValue(name, event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [name]: value });
    },
    validateFields() {
        const addAnswer = this.props.addAnswer;
        const id = this.props.id;
        const text = this.state.answerText;
        const status = this.state.answerCheck;
        addAnswer(id, text, status);
        this.setState({
            answerText: '',
            answerCheck: false
        });
    },
    render() {
        const { answerText, answerCheck } = this.state;
        return <div className={styles.answeAdd}>
            <input
                onChange={_.partial(this.setValue, 'answerText')}
                className={styles.answerAddText}
                type="text"
                value={answerText} />
            <label
                title='Ответ верен ?'
                className={styles.answerAddCheckbox}>
                <input
                    type="checkbox"
                    onChange={_.partial(this.setValue, 'answerCheck')}
                    className={styles.answerAddCheckboxInput} />
                <i className={classnames('fa', (answerCheck) ? 'fa-check-square-o' : 'fa-square-o')}></i>
            </label>
            <button
                onClick={this.validateFields}
                className={styles.answerAddButton}>
                <i className={classnames('fa fa-plus-square')}></i>
            </button>
        </div>;
    }
});

///////////////////////////////////////////////////////////////////////////////
function AnswerItem(props) {
    const { text, statusAnswer, answerDelete, index } = props;
    return <li className={styles.answerItem}>
        <span className={styles.answerItemText}>{text}</span>
        <span className={styles.answerItemCheckbox} >
            <i className={classnames('fa', (statusAnswer) ? 'fa-check-square-o' : 'fa-square-o')}></i>
        </span>
        <span
            onClick={() => answerDelete(index)}
            className={styles.answerItemDelete}>
            <i className={classnames('fa fa-times')}></i>
        </span>
    </li>
}

///////////////////////////////////////////////////////////////////////////////
const Answers = createReactClass({
    getInitialState() {
        return {
            answers: [
                {
                    text: 'Текст',
                    statusAnswer: true
                }
            ]
        }
    },
    render() {
        const { answers, id, addAnswer } = this.props;
        return <div>
            <div className={styles.btnWrapper}>
                <AddAnswerForm id={id} addAnswer={addAnswer} />
            </div>
            <ol className={styles.answersList}>
                {
                    _.map(answers, (item, index) => <AnswerItem
                        text={item.answerText}
                        statusAnswer={item.status}
                        key={index}
                        index={index}
                        answerDelete={this.answerDelete} />)
                }
            </ol>

        </div>
    }
})

///////////////////////////////////////////////////////////////////////////////
function Question(props) {
    const { addAnswer, question, delQuestion, id } = props;
    return <div className={styles.questionBlock}>
        <span
            onClick={() => delQuestion(id)}
            className={styles.questionBtnDelete}
            title='Удалить вопрос'>
            <i className={classnames('fa fa-times')} />
        </span>
        <div className={styles.questionContent}>
            <div className={styles.questionInfo}>
                <div className={styles.questionRow}>
                    <InputBlock
                        label='Заголовок вопроса'
                        id='title'
                        value={question.questionTitle} />
                </div>
                <div className={styles.questionRow}>
                    <InputBlock
                        label='Описание вопроса'
                        id='title'
                        value={question.questionDescription} />
                </div>
            </div>
            <div className={styles.questionAnswers}>
                <div className={styles.questionAnswersTitle}>Ответы: </div>
                <Answers id={id} addAnswer={addAnswer} answers={question.answers} />
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
export default Question;

///////////////////////////////////////////////////////////////////////////////