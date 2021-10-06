import { GlobalState } from '../../types/GlobalState';
import { Issue } from '../../types/game';
import { makeStatisticCards } from '../statistic/makeStatistic';

export async function saveStatisticToIssue(globalState: GlobalState): Promise<void> {
    const currentIssue: Issue | undefined = globalState.game.issues.find(
        (issue: Issue) => issue.current,
    );
    if (!currentIssue) return;
    currentIssue.statistic = makeStatisticCards(globalState.game.selectedCards);
    const newIssues: Issue[] = globalState.game.issues.filter(
        (issue: Issue) => issue.id !== currentIssue.id,
    );
    await globalState.ws.provider?.changeValueOfGameProperty('issues', [
        ...newIssues,
        currentIssue,
    ]);
}
