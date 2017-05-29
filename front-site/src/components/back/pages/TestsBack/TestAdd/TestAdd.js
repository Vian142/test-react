///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import createReactClass from 'create-react-class';
import InputBlock from '../../../common/InputBlock/InputBlock';
import StaticContent from '../../../common/StaticContent/StaticContent';
import Question from './Question/Question';
import axios from 'axios';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Добавить тест'
}
///////////////////////////////////////////////////////////////////////////////
const TestAdd = createReactClass({
    getInitialState() {
        return {
            title: '',
            description: '',
            category: '',
            level: '',
            visible: false,
            questions: [
                {
                    questionTitle: '',
                    questionDescription: '',
                    answers: []
                }
            ]
        }
    },
    setValue(name, event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [name]: value });
    },
    changeTitle(id, value) {
        let questionData = _.clone(this.state.questions);
        questionData[id].questionTitle = value;
        console.log(questionData);
        this.setState({
            questions: questionData
        })
    },
    changeDescription(id, value) {
        let questionData = _.clone(this.state.questions);
        questionData[id].questionDescription = value;
        console.log(questionData);
        this.setState({
            questions: questionData
        })
    },
    changeInfoQuestion(id, field, value) {
        if(field == 'title') {
            return this.changeTitle(id, value);
        } else {
            return this.changeDescription(id, value);
        }
    },
    addQuestion() {
        let questionsData = _.clone(this.state.questions);
        const question = {
            questionTitle: '',
            questionDescription: '',
            answers: []
        };
        questionsData.push(question);
        this.setState({
            questions: questionsData
        })
    },
    delQuestion(index) {
        let questionsData = _.clone(this.state.questions);
        questionsData.splice(index, 1);
        this.setState({
            questions: questionsData
        })
    },
    addAnswer(id, text, status) {
        let answersData = _.clone(this.state.questions);
        const answer = {
            answerText: text,
            status: status
        }
        answersData[id].answers.push(answer);
        this.setState({
            questions: answersData
        })
    },
    delAnswer(id, index) {
        let answersData = this.state.questions;
        answersData[id].answers.splice(index, 1)
        this.setState({
            answers: answersData
        })
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
                'visible',
                'questions'
            ]);
        console.log(infoTest);
        axios.post('/addtest', { test: infoTest }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log('Ошибка клиента', error);
        })
    },
    render() {
        const { title, description, category, visible, level, questions } = this.state;
        return <StaticContent {...propsPage}>
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <div className={styles.testBlockTitle}>Информация о тесте</div>
                    <div className={styles.infoTest}>
                        <div className={styles.infoTestMain}>
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
                        </div>
                        <div className={styles.infoTestAdditionally}>
                            <div className={styles.inputRow}>
                                <label
                                    className={styles.visibleLabel}
                                    htmlFor="visible">
                                    <span className={styles.visibleLabelText}>Активен</span>&nbsp;
                                <i className={
                                        classnames(styles.visibleLabelIcon, 'fa',
                                            (visible) ? 'fa-check-square-o' : 'fa-square-o')} />
                                </label>
                                <input type='checkbox'
                                    className={styles.visibleCheckbox}
                                    onChange={_.partial(this.setValue, 'visible')}
                                    label='Активен'
                                    id='visible'
                                    value={visible} />
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
                        </div>
                    </div>
                    <div className={styles.questionsContainer}>
                        {
                            _.map(questions, (question, index) => <Question
                                changeInfoQuestion={this.changeInfoQuestion}
                                addAnswer={this.addAnswer}
                                delAnswer={this.delAnswer}
                                delQuestion={this.delQuestion}
                                key={index}
                                id={index}
                                question={question} />)
                        }
                        <div className={styles.questionsBtnWrapper}>
                            <span
                                onClick={this.addQuestion}
                                className={styles.questionsBtnAdd}>
                                <i className={classnames('fa fa-plus')} />&nbsp;
                                Добавить вопрос</span>
                        </div>
                    </div>
                    <div className={styles.testBtnWrapper}>
                        <button
                            onClick={this.saveTest}
                            className={styles.btnSubmit}>Сохранить тест</button>
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