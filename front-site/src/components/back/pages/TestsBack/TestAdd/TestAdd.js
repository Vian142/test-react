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
const AnswerItem = createReactClass({
    getInitialState() {
        return {
            text: '',
            statusAnswer: false
        }
    },
    changeText(event) {
        this.setState({ text: event.target.value });
    },
    checkAnswer() {
        this.setState({
            statusAnswer: !this.state.statusAnswer
        });
    },
    render() {
        const { text, statusAnswer } = this.state;
        return <li className={styles.answerItem}>
            <input
                onChange={this.changeText}
                className={styles.answerItemText}
                type="text"
                value={text} />
            <label className={styles.answerItemCheckbox}>
                <i className={classnames('fa', (statusAnswer) ? 'fa-check-square-o' : 'fa-square-o')}></i>
                <input type='checkbox' onChange={this.checkAnswer} />
            </label>
        </li>
    }
})
///////////////////////////////////////////////////////////////////////////////
const Answers = createReactClass({
    getInitialState() {
        return {
            answers: 1
        }
    },
    addAnswer() {
        this.setState({
            answers: this.state.answers + 1
        });
    },
    render() {
        const { answers } = this.state;
        return <div>
            <ol className={styles.answersList}>
            {
                _.times(answers, (index) => <AnswerItem key={index} />)
            }
            </ol>
            <div className={styles.btnWrapper}>
                <br/>
                <span
                    onClick={this.addAnswer}
                    className={styles.addAnswer}>Добавить ответ</span>
            </div>    
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