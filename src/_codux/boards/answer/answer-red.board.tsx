import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'AnswerRed',
    Board: () => <Answer text="Tom" text="Tom" color="red" disabled={undefined} />,
    isSnippet: true,
});
