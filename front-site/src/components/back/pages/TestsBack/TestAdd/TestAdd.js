///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import createReactClass from 'create-react-class';
import InputBlock from '../../../common/InputBlock/InputBlock';
import StaticContent from '../../../common/StaticContent/StaticContent';
import Question from './Question/Question';
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
                    answers: [{
                        answerText: 'Ответ 1',
                        status: false
                    },
                    {
                        answerText: 'Ответ 2',
                        status: true
                    }]
                }
            ]
        }
    },
    setValue(name, event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [name]: value });
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
        console.log(index);
        let questionsData = _.clone(this.state.questions);
        questionsData.splice(index, 1);
        this.setState({
            questions: questionsData
        })
    },
    addAnswer(id, text, status) {
        let answersData = _.clone(this.state.questions);
        console.log(answersData);
        const answer = {
            answerText: text,
            status: status
        }
        answersData.answers.push(answer);
        this.setState({
            questions: answersData
        })
    },
    answerDelete(index) {
        let answersData = this.state.answers;
        answersData.splice(index, 1)
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
                'visible'
            ]);
        console.log(infoTest);
    },
    render() {
        const { title, description, category, visible, level, questions } = this.state;
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
                        {
                            _.map(questions, (question, index) => <Question
                                addAnswer={this.addAnswer}
                                delQuestion={this.delQuestion}
                                key={index}
                                id={index}
                                question={question} />)
                        }
                        <div className={styles.questionsBtnWrapper}>
                            <span
                                onClick={this.addQuestion}
                                className={styles.questionsBtn}>Добавить билет</span>
                        </div>
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