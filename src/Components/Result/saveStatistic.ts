import { makeStatisticCards } from '../statistic/makeStatistic';
import { Card, Issue, StatisticCard } from '../../types/game';
import { User } from '../../types/user';

export function saveStatistic(
    issues: Issue[],
    oldStatistic: { issue: Issue; statisticCards: StatisticCard[] }[],
    selectedCards: Array<{ card: Card | undefined; user: User }>,
): { issue: Issue; statisticCards: StatisticCard[] }[] | [] {
    const currentIssue = issues.find((issue) => issue.current);
    if (currentIssue) {
        const statistic = [...oldStatistic];
        const statisticCards = makeStatisticCards(selectedCards);
        const index = statistic.findIndex((item) => item.issue.id === currentIssue.id);
        if (index >= 0) {
            statistic[index] = { issue: currentIssue, statisticCards };
        } else {
            statistic.push({ issue: currentIssue, statisticCards });
        }
        return statistic;
    }
    return [];
}
