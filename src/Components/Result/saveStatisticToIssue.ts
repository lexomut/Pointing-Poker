import { GlobalState } from '../../types/GlobalState';
import { Issue } from '../../types/game';
import { makeStatisticCards } from '../statistic/makeStatistic';

export async function saveStatisticToIssue(globalState: GlobalState): Promise<void> {
    const newIssues: Issue[] = globalState.game.issues.map((issue) => {
        if (issue.current) issue.statistic = makeStatisticCards(globalState.game.selectedCards);
        return issue;
    });

    await globalState.ws.provider?.changeValueOfGameProperty('issues', newIssues);
}
