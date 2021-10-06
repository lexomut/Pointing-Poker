import { Card, StatisticCard } from '../../types/game';
import { User } from '../../types/user';

export function makeStatisticCards(
    selectedCards: Array<{ card: Card | undefined; user: User }>,
): StatisticCard[] {
    const values = selectedCards.map((obj) => (!obj.card ? ('?' as any) : obj.card.value));
    const obj = values.reduce((previousValue, currentValue) => {
        const prev = previousValue;
        const curr = currentValue;
        const res = ((prev[curr] = prev[curr] + 1 || 1), prev);
        return res;
    }, {});
    return Object.entries(obj).map((item) => {
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
}
