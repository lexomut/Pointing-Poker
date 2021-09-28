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
        scoreType: 'SP',
        isEditable: true,
    },
    {
        id: 2,
        value: 13,
        scoreType: 'SP',
        isEditable: false,
    },
];
export const statisticCardsData: StatisticCard[] = [
    {
        id: 1,
        value: 1,
        scoreType: 'SP',
        isEditable: true,
        voteResult: '45%',
    },
    {
        id: 2,
        value: 13,
        scoreType: 'SP',
        isEditable: false,
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
        scoreType: 'SP',
        isEditable: false,
    },
    {
        id: 2,
        value: 2,
        scoreType: 'SP',
        isEditable: false,
    },
    {
        id: 3,
        value: 3,
        scoreType: 'SP',
        isEditable: false,
    },
    {
        id: 4,
        value: 5,
        scoreType: 'SP',
        isEditable: false,
    },
    {
        id: 5,
        value: 8,
        scoreType: 'SP',
        isEditable: false,
    },
    {
        id: 6,
        value: 13,
        scoreType: 'SP',
        isEditable: false,
    },
];
