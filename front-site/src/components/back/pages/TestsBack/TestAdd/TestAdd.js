///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import createReactClass from 'create-react-class';
import StaticContent from '../../../common/StaticContent/StaticContent';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Добавить тест'
}
///////////////////////////////////////////////////////////////////////////////
function InputBlock({ value, label, error, errorMsg, id, labelStyle, inputStyle }) {
    return <div className={styles.inputBlock}>
        <label
            className={classnames(styles.inputBlockLabel, labelStyle)}
            htmlFor={id}>
            {label}
        </label>
        <input
            className={classnames(styles.inputBlockInput, inputStyle)}
            type="text"
            id={id}
            value={value}
        />
        <div className={classnames(styles.msgBlock, { [styles.errorMsg]: error })}>{errorMsg}</div>
    </div>
}
///////////////////////////////////////////////////////////////////////////////
function Answer({ value, checked }) {
    return <span className={styles.answerBlock}>
        <input
            className={styles.answerInput}
            type="text"
            value={value} />
        <label>
            <i className={classnames('fa', (checked) ? 'fa-check-square-o' : 'fa-square-o')}></i>
            <input id={'checkbox'} type="checkbox" />
        </label>
    </span>
}

///////////////////////////////////////////////////////////////////////////////
function Question() {
    return <div className={styles.questionBlock}>
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
        <div className={styles.questionAnswersContainer}>
            <Answer />
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
            level: ''
        }
    },
    setValue(name, event) {
        this.setState({ [name]: event.target.value });
    },
    render() {
        const { title, description, category, visible } = this.state;
        return <StaticContent {...propsPage}>
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <div className={styles.infoTest}>
                        <div className={styles.inputRow}>
                            <InputBlock
                                label='Название'
                                id='title'
                                value={title} />
                        </div>
                        <div className={styles.inputRow}>
                            <InputBlock
                                label='Описание'
                                id='description'
                                value={description} />
                        </div>
                        <div className={styles.inputRow}>
                            <InputBlock
                                label='Категория'
                                id='category'
                                value={category} />
                        </div>
                        <div className={styles.inputRow}>
                            <input
                                type="range"
                                min='0'
                                max='5'
                                step='1'/>
                        </div>
                        <div className={styles.inputRow}>
                            <InputBlock
                                label='Активен'
                                id='visible'
                                value={visible} />
                        </div>
                    </div>
                    <div className={styles.questionsContainer}>
                        <Question />
                    </div>
                </div>
            </div>
        </StaticContent>
    }
});

///////////////////////////////////////////////////////////////////////////////
export default TestAdd;

///////////////////////////////////////////////////////////////////////////////