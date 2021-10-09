import { Card, StatisticCard } from '../../types/game';
import { User } from '../../types/user';

export function makeStatisticCards(
    selectedCards: Array<{ card: Card | undefined; user: User }>,
    dealerIsPlaying: boolean,
): StatisticCard[] {
    const values = selectedCards
        .filter(
            (item) =>
                item.user.roleInGame === 'player' ||
                (item.user.roleInGame === 'dealer' && dealerIsPlaying),
        )
        .map((obj) => (!obj.card ? '?' : obj.card.value));
    const obj: { [key: string]: number } = values.reduce(
        (prev: { [key: string]: number }, curr: string) => {
            const res = { ...prev };
            res[curr] = prev[curr] + 1 || 1;
            return res;
        },
        {},
    );
    return Object.entries(obj).map((item: [string, number]) => {
        const key: string = item[0];
        const value: number = item[1];
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
