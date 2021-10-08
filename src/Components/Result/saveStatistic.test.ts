import { Card, Issue, StatisticCard } from '../../types/game';
import { User } from '../../types/user';
import { saveStatistic } from './saveStatistic';

test('check empty arrays statistic', () => {
    const issues: Issue[] = [];
    const oldStatistic: { issue: Issue; statisticCards: StatisticCard[] }[] = [];
    const selectedCards: Array<{ card: Card | undefined; user: User }> = [];

    const result = saveStatistic(issues, oldStatistic, selectedCards);
    expect(result).toMatchObject([]);
});

test('check statistic when there is an observer, issue 1', () => {
    const issues: Issue[] = [
        {
            id: '0',
            name: 'Issue 0',
            priority: 'High',
            current: true,
            score: '-',
        },
        {
            id: '1',
            name: 'Issue 1',
            priority: 'Medium',
            score: '-',
        },
        {
            id: '2',
            name: 'Issue 2',
            priority: 'High',
            score: '-',
        },
    ];
    const oldStatistic: { issue: Issue; statisticCards: StatisticCard[] }[] = [
        {
            issue: issues[0],
            statisticCards: [
                {
                    id: '0',
                    value: '3',
                    voteResult: '3',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '3',
                },
            ],
        },
        {
            issue: issues[1],
            statisticCards: [
                {
                    id: '0',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
        {
            issue: issues[2],
            statisticCards: [
                {
                    id: '0',
                    value: '2',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
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
    const correctResult = [
        {
            issue: issues[0],
            statisticCards: [
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
            ],
        },
        {
            issue: issues[1],
            statisticCards: [
                {
                    id: '0',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
        {
            issue: issues[2],
            statisticCards: [
                {
                    id: '0',
                    value: '2',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
    ];

    const result = saveStatistic(issues, oldStatistic, selectedCards);
    expect(result).toMatchObject(correctResult);
    expect(result).toBeTruthy();
    expect(result).toBeDefined();
    expect(result[0]).toHaveProperty('issue');
});

test('check statistic when there is an observer, new issue', () => {
    const issues: Issue[] = [
        {
            id: '0',
            name: 'Issue 0',
            priority: 'High',
            score: '-',
        },
        {
            id: '1',
            name: 'Issue 1',
            priority: 'Medium',
            score: '-',
        },
        {
            id: '2',
            name: 'Issue 2',
            priority: 'High',
            score: '-',
        },
        {
            id: '3',
            name: 'Issue NEW',
            priority: 'High',
            current: true,
            score: '-',
        },
    ];
    const oldStatistic: { issue: Issue; statisticCards: StatisticCard[] }[] = [
        {
            issue: issues[0],
            statisticCards: [
                {
                    id: '0',
                    value: '3',
                    voteResult: '3',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '3',
                },
            ],
        },
        {
            issue: issues[1],
            statisticCards: [
                {
                    id: '0',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
        {
            issue: issues[2],
            statisticCards: [
                {
                    id: '0',
                    value: '2',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
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
    const correctResult = [
        {
            issue: issues[0],
            statisticCards: [
                {
                    id: expect.any(String),
                    value: '3',
                    voteResult: '3',
                },
                {
                    id: expect.any(String),
                    value: '3',
                    voteResult: '3',
                },
            ],
        },
        {
            issue: issues[1],
            statisticCards: [
                {
                    id: '0',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '4',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
        {
            issue: issues[2],
            statisticCards: [
                {
                    id: '0',
                    value: '2',
                    voteResult: '4',
                },
                {
                    id: '1',
                    value: '3',
                    voteResult: '4',
                },
                {
                    id: '2',
                    value: '5',
                    voteResult: '5',
                },
            ],
        },
        {
            issue: issues[3],
            statisticCards: [
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
            ],
        },
    ];

    const result = saveStatistic(issues, oldStatistic, selectedCards);
    expect(result).toMatchObject(correctResult);
});
