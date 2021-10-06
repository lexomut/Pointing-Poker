import { GlobalState } from '../../types/GlobalState';
import { makeStatisticCards } from '../statistic/makeStatistic';

export async function saveStatistic(globalState: GlobalState): Promise<void> {
    const currentIssue = globalState.game.issues.find((issue) => issue.current);
    if (!currentIssue) return;
    const statistic = [...globalState.game.statistic];
    const statisticCards = makeStatisticCards(globalState.game.selectedCards);
    const index = statistic.findIndex((item) => item.issue.id === currentIssue.id);
    if (index >= 0) {
        statistic[index] = { issue: currentIssue, statisticCards };
    } else statistic.push({ issue: currentIssue, statisticCards });
    await globalState.ws.provider?.changeValueOfGameProperty('statistic', statistic);
}
