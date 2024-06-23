import styles from './App.module.scss';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import Statbar from './components/StatBar';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    return (
        <div>
            <Statbar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
        </div>
    );
}

export default App;
