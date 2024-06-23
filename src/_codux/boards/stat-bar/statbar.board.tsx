import { createBoard } from '@wixc3/react-board';
import Statbar from '../../../components/StatBar';

export default createBoard({
    name: 'Statbar',
    Board: () => <Statbar />,
    isSnippet: true,
});
