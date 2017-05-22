///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import createReactClass from 'create-react-class';
import StaticContent from '../../../common/StaticContent/StaticContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Добавить тест'
}
///////////////////////////////////////////////////////////////////////////////
function InputBlock({ onChange, value, label, placeholder = '', error, errorMsg, id, labelStyle, inputStyle }) {
    return <div className={styles.inputBlock}>
        <label
            className={classnames(styles.inputBlockLabel, labelStyle)}
            htmlFor={id}>
            {label}
        </label>
        <input
            placeholder={placeholder}
            onChange={onChange}
            className={classnames(styles.inputBlockInput, inputStyle)}
            type="text"
            id={id}
            value={value}
        />
        <div className={classnames(styles.msgBlock, { [styles.errorMsg]: error })}>{errorMsg}</div>
    </div>
}
///////////////////////////////////////////////////////////////////////////////
const AddAnswer = createReactClass({
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
        this.props.answerAdd(this.state.answerText, this.state.answerCheck);
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
    answerAdd(text, status) {
        let answersData = this.state.answers;
        const answer = {
            text: text,
            statusAnswer: status
        }
        answersData.push(answer);
        this.setState({
            answers: answersData
        })
    },
    answerDelete(index) {
        console.log(index);
        let answersData = this.state.answers;
        console.log(answersData);
        answersData.splice(index,1)
        console.log(answersData);
        this.setState({
            answers: answersData
        })
    },
    render() {
        const { answers } = this.state;
        return <div>
            <div className={styles.btnWrapper}>
                <AddAnswer answerAdd={this.answerAdd} />
            </div>
            <ol className={styles.answersList}>
                {
                    _.map(answers, (item, index) => <AnswerItem
                        text={item.text}
                        statusAnswer={item.statusAnswer}
                        key={index}
                        index={index}
                        answerDelete={this.answerDelete} />)
                }
            </ol>

        </div>
    }
})

///////////////////////////////////////////////////////////////////////////////
function Question() {
    return <div className={styles.questionBlock}>
        <div className={styles.questionContent}>
            <div className={styles.questionInfo}>
                <div className={styles.questionRow}>
                    <InputBlock
                        label='Заголовок вопроса'
                        id='title'
                        value='' />
                </div>
                <div className={styles.questionRow}>
                    <InputBlock
                        label='Описание вопроса'
                        id='title'
                        value='' />
                </div>
            </div>
            <div className={styles.questionAnswers}>
                <div className={styles.questionAnswersTitle}>Ответы: </div>
                <Answers />
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////
const TestAdd = createReactClass({
    getInitialState() {
        return {
            title: '',
            description: '',
            category: '',
            level: '',
            visible: false
        }
    },
    setValue(name, event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [name]: value });
    },
    saveTest() {
        console.log('Сохранение теста');
        const infoTest = _.pick(
            this.state,
            [
                'title',
                'description',
                'category',
                'level',
                'visible'
            ]);
        console.log(infoTest);
    },
    render() {
        const { title, description, category, visible, level } = this.state;
        return <StaticContent {...propsPage}>
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <div className={styles.testBlockTitle}>Информация о тесте</div>
                    <div className={styles.infoTest}>
                        <div className={styles.inputRow}>
                            <InputBlock
                                onChange={_.partial(this.setValue, 'title')}
                                label='Название'
                                id='title'
                                value={title} />
                        </div>
                        <div className={styles.inputRow}>
                            <InputBlock
                                onChange={_.partial(this.setValue, 'description')}
                                label='Описание'
                                id='description'
                                value={description} />
                        </div>
                        <div className={styles.inputRow}>
                            <InputBlock
                                onChange={_.partial(this.setValue, 'category')}
                                label='Категория'
                                id='category'
                                value={category} />
                        </div>
                        <div className={styles.inputRow}>
                            <div>Уровень сложности</div>
                            <input
                                onChange={_.partial(this.setValue, 'level')}
                                id='level'
                                type="range"
                                min='0'
                                max='5'
                                step='1'
                                value={level} />
                        </div>
                        <div className={styles.inputRow}>
                            <div>Активен</div>
                            <input type='checkbox'
                                onChange={_.partial(this.setValue, 'visible')}
                                label='Активен'
                                id='visible'
                                value={visible} />
                        </div>
                    </div>
                    <div className={styles.questionsContainer}>
                        <Question />
                    </div>
                    <div className={styles.btnWrapper}>
                        <button
                            onClick={this.saveTest}
                            className={styles.btnSubmit}>Добавить тест</button>
                        <Link to='/admin/tests/' className={styles.btnBack}>Вернуться</Link>
                    </div>
                </div>
            </div>
        </StaticContent>
    }
});

///////////////////////////////////////////////////////////////////////////////
export default TestAdd;

///////////////////////////////////////////////////////////////////////////////