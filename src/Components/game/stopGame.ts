import { GlobalState } from '../../types/GlobalState';
import { IssueIssueToCSV } from '../../utils/save';

export function gameOver(globalState: GlobalState): void {
    globalState.ws.provider?.changeValueOfGameProperty('status', 'over');
    IssueIssueToCSV(globalState.game.issues);
}
