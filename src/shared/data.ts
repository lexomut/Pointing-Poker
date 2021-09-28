import { Author, Card, Issue, StatisticCard, UserWithScore } from './types';

export const authors: Author[] = [
    {
        id: 1,
        name: 'Alexey Pirozerskiy',
        link: 'https://github.com/lexomut',
    },
    {
        id: 2,
        name: 'LenarFF',
        link: 'https://github.com/LenarFF',
    },
    {
        id: 3,
        name: 'Olga Kitel',
        link: 'https://github.com/OKitel',
    },
];

export const gameCardsData: Card[] = [
    {
        id: 1,
        value: 1,
    },
    {
        id: 2,
        value: 13,
    },
];

export const fibonacciDeck: Card[] = [
    {
        id: 1,
        value: 1,
    },
    {
        id: 2,
        value: 2,
    },
    {
        id: 3,
        value: 3,
    },
    {
        id: 4,
        value: 5,
    },
    {
        id: 5,
        value: 8,
    },
    {
        id: 6,
        value: 13,
    },
    {
        id: 7,
        value: 21,
    },
    {
        id: 8,
        value: 34,
    },
    {
        id: 9,
        value: 55,
    },
    {
        id: 10,
        value: 89,
    },
];

export const powersOfTwoDeck: Card[] = [
    {
        id: 1,
        value: 2,
    },
    {
        id: 2,
        value: 4,
    },
    {
        id: 3,
        value: 8,
    },
    {
        id: 4,
        value: 16,
    },
    {
        id: 5,
        value: 32,
    },
    {
        id: 6,
        value: 64,
    },
    {
        id: 7,
        value: 128,
    },
    {
        id: 8,
        value: 256,
    },
];
export const statisticCardsData: StatisticCard[] = [
    {
        id: 1,
        value: 1,
        voteResult: '45%',
    },
    {
        id: 2,
        value: 13,
        voteResult: '10%',
    },
];

export const cardsBackground = [
    {
        id: 1,
        class: 'bgMountains',
    },
    {
        id: 2,
        class: 'bgMoon',
    },
    {
        id: 3,
        class: 'bgEagle',
    },
    {
        id: 4,
        class: 'bgLeaf',
    },
];

export const usersWithScore: UserWithScore[] = [
    {
        name: 'Lily Atkins',
        position: 'Senior',
        initials: 'LA',
        userID: 1,
        score: 'In progress',
    },
    {
        name: 'Barsik',
        position: 'Junior lion',
        initials: 'BB',
        userID: 2,
        score: '5 SP',
        imgSrc: 'https://placekitten.com/200/200',
    },
    {
        name: 'Mark Zuckerberg',
        position: 'Facebook founder',
        initials: 'MZ',
        userID: 3,
        score: '1 SP',
    },
    {
        name: 'Alex',
        position: 'Junior',
        initials: 'AL',
        userID: 4,
        score: '10 SP',
    },
    {
        name: 'Mike Smith',
        position: 'Middle',
        initials: 'MS',
        userID: 5,
        score: 'In progress',
    },
];

export const issues: Issue[] = [
    {
        current: true,
        name: 'Issue 123',
        priority: 'Critical',
    },
    {
        current: false,
        name: 'Issue 135',
        priority: 'High',
    },
    {
        current: false,
        name: 'Issue 144',
        priority: 'Medium',
    },
    {
        current: false,
        name: 'Issue 162',
        priority: 'Low',
    },
    {
        current: false,
        name: 'Issue 163',
        priority: 'Low',
    },
];

export const cardsDeck: Card[] = [
    {
        id: 1,
        value: 1,
    },
    {
        id: 2,
        value: 2,
    },
    {
        id: 3,
        value: 3,
    },
    {
        id: 4,
        value: 5,
    },
    {
        id: 5,
        value: 8,
    },
    {
        id: 6,
        value: 13,
    },
];
