import { Card, Issue } from '../../types/game';
import { User } from '../../types/user';
import { StatisticCard } from '../../shared/types';
import { GlobalState } from '../../types/GlobalState';

export function makeStatisticCards(
    selectedCards: Array<{ card: Card | undefined; user: User }>,
): StatisticCard[] {
    const values = selectedCards.map((obj) => (!obj.card ? ('?' as any) : obj.card.value));
    const obj = values.reduce((previousValue, currentValue) => {
        const prev = previousValue;
        const curr = currentValue;
        const res = ((prev[curr] = prev[curr] + prev[curr] || 1), prev);
        return res;
    }, {});
    const cards = Object.entries(obj).map((item) => {
        const key: string = item[0] as string;
        const value: number = item[1] as number;
        return {
            id:
                key === 'cup'
                    ? ''
                    : new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
            value: key,
            voteResult: `${Math.ceil((value / values.length) * 100)}%`,
        };
    });
    return cards;
}

export async function saveStatisticToIssue(globalState: GlobalState) {
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
