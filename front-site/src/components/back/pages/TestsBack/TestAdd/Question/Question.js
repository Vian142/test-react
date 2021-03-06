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
        const id = _.clone(this.props.id);
        const text = _.clone(this.state.answerText);
        const status = _.clone(this.state.answerCheck);
        return addAnswer(id, text, status);
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
    const { text, statusAnswer, delAnswer, id, index } = props;
    return <li className={styles.answerItem}>
        <span className={styles.answerItemText}>{text}</span>
        <span className={styles.answerItemCheckbox} >
            <i className={classnames('fa', (statusAnswer) ? 'fa-check-square-o' : 'fa-square-o')}></i>
        </span>
        <span
            onClick={() => delAnswer(id, index)}
            className={styles.answerItemDelete}>
            <i className={classnames('fa fa-times')}></i>
        </span>
    </li>
}

///////////////////////////////////////////////////////////////////////////////
const Answers = createReactClass({
    render() {
        const { answers, id, addAnswer, delAnswer } = this.props;
        return <div>
            <div className={styles.btnWrapper}>
                <AddAnswerForm id={id} addAnswer={addAnswer} />
            </div>
            <ol className={styles.answersList}>
                {
                    _.map(answers, (item, index) => <AnswerItem
                        id={id}
                        text={item.text}
                        statusAnswer={item.status}
                        key={index}
                        index={index}
                        delAnswer={delAnswer} />)
                }
            </ol>

        </div>
    }
})

///////////////////////////////////////////////////////////////////////////////
const Question = createReactClass({
    getInitialState() {
        return {}
    },
    setValue(name, event) {
        let id = this.props.id;
        let value = event.target.value;
        if(name == 'title') {
            this.props.changeInfoQuestion(id, 'title', value);
        } else {
            this.props.changeInfoQuestion(id, 'description', value);
        }
    },
    render() {
        const {
            addAnswer,
            delAnswer,
            question,
            delQuestion,
            id } = this.props;
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
                            value={question.questionTitle}
                            onChange={_.partial(this.setValue, 'title')} />
                    </div>
                    <div className={styles.questionRow}>
                        <InputBlock
                            label='Описание вопроса'
                            id='title'
                            value={question.questionDescription}
                            onChange={_.partial(this.setValue, 'description')} />
                    </div>
                </div>
                <div className={styles.questionAnswers}>
                    <div className={styles.questionAnswersTitle}>Ответы: </div>
                    <Answers
                        id={id}
                        addAnswer={addAnswer}
                        answers={question.answers}
                        delAnswer={delAnswer} />
                </div>
            </div>
        </div>
    }
})

///////////////////////////////////////////////////////////////////////////////
export default Question;

///////////////////////////////////////////////////////////////////////////////