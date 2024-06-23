import { Question } from "../types"

type Props = {
        question: Question
        onSubmit: (correct: boolean) => void
}

function QuestionComp(props: Props) {
    return <div>
        <h3>{props.question.question}</h3>
    </div>
}

export default QuestionComp