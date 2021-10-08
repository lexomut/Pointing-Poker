import { Card, StatisticCard } from '../../types/game';
import { User } from '../../types/user';
import { makeStatisticCards } from './makeStatistic';

test('check statistic when there is an observer, issue 1', () => {
    const statisticCards: StatisticCard[] = [
        {
            id: expect.any(String),
            value: '1',
            voteResult: '34%',
        },
        {
            id: expect.any(String),
            value: '2',
            voteResult: '34%',
        },
        {
            id: expect.any(String),
            value: '?',
            voteResult: '34%',
        },
    ];
    const selectedCards: Array<{ card: Card | undefined; user: User }> = [
        {
            card: {
                id: '0',
                value: '1',
            },
            user: {
                userID: '0',
                firstName: 'Mike',
                roleInGame: 'dealer',
                initials: 'M',
            },
        },
        {
            card: {
                id: '1',
                value: '2',
            },
            user: {
                userID: '1',
                firstName: 'Lilly',
                roleInGame: 'player',
                initials: 'L',
            },
        },
        {
            card: undefined,
            user: {
                userID: '2',
                firstName: 'Barsik',
                roleInGame: 'observer',
                initials: 'B',
            },
        },
    ];

    const result = makeStatisticCards(selectedCards);
    expect(result).toMatchObject(statisticCards);
    expect(result).toBeTruthy();
    expect(result).toBeDefined();
});
