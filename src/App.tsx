import styles from './App.module.scss';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import Statbar from './components/StatBar';
import QuestionComp from './components/Question';
import Reset from './components/reset';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);
    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    const reset = () => {
        setCurrentQuestionIdx(0)
        setCorrectAnswers(0)
        setIncorrectAnswers(0)
        setIncorrectAnswers(false)
    }

    if (currentQuestionIdx >= allQuestions.questions.length)
        return <Reset totalQuestions={allQuestions.questions.length} 
        correctQuestions={correctAnswers}
        onPress={reset}/>;

    return (
        <div className={styles.app}>
            <Statbar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance}>Next Question...</button>}
        </div>
    );
}

export default App;
