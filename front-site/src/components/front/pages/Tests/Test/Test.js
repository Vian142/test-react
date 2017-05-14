///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import styles from './styles.css'
///////////////////////////////////////////////////////////////////////////////
function TicketView(props) {
    const {setAnswer, answerUser} = props;
    return (
        <div className={styles.ticket}>
            <div className={styles.ticketNumber}>Вопрос № <span className={styles.ticketNumberValue}>4</span></div>
            <div className={styles.ticketQuestion}>Как пройти по дороге налево или направо?</div>
            <div className={styles.ticketAnswers}>
                <label className={styles.answerItem} onClick={() => setAnswer(0)} htmlFor='answer1'>
                    <i className={classnames('fa', (answerUser == 0)? 'fa-check-square-o' : 'fa-square-o')} />
                    <input id='answer1' type="radio" name='answers' />
                    <span className={styles.answerText}>Ответ 1</span>
                </label>
                <label className={styles.answerItem} onClick={() => setAnswer(1)} htmlFor='answer2'>
                    <i className={classnames('fa',  (answerUser == 1)? 'fa-check-square-o' : 'fa-square-o')} />
                    <input id='answer2' type="radio" name='answers' />
                    <span className={styles.answerText}>Ответ 2</span>
                </label>
                <label className={styles.answerItem} onClick={() => setAnswer(2)} htmlFor='answer3'>
                    <i className={classnames('fa', (answerUser == 2)? 'fa-check-square-o' : 'fa-square-o')} />
                    <input id='answer3' type="radio" name='answers' />
                    <span className={styles.answerText}>Ответ 3</span>
                </label>
            </div>
        </div>
    );
}

///////////////////////////////////////////////////////////////////////////////
const Test = createReactClass({
    getInitialState() {
        return {
            question: 1,
            answerUser: -1
        }
    },
    setAnswer(value) {
        this.setState({
            answerUser: value
        })
    },
    render() {
        const { answerUser } = this.state;
        return (
            <div className={classnames(styles.mainWrapper)}>
                <div className={styles.testWrapper}>
                    <div className={styles.testTitle}>Заголовок теста</div>
                    <div className={styles.ticketWrapper}>
                        <TicketView
                            answerUser={answerUser}
                            setAnswer={this.setAnswer} />
                    </div>
                    <div className={styles.testBtnWrapper}>
                        <button className={styles.testBtn}>
                            Следующий вопрос &#8194;<i className='fa fa-angle-right'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

///////////////////////////////////////////////////////////////////////////////
export default Test;
///////////////////////////////////////////////////////////////////////////////