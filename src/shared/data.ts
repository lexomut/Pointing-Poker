import { Author, UserWithScore } from './types';
import { Card, Issue, StatisticCard } from '../types/game';
import { User } from '../types/user';

export const authors: Author[] = [
    {
        id: '1',
        name: 'Alexey Pirozerskiy',
        link: 'https://github.com/lexomut',
    },
    {
        id: '2',
        name: 'LenarFF',
        link: 'https://github.com/LenarFF',
    },
    {
        id: '3',
        name: 'Olga Kitel',
        link: 'https://github.com/OKitel',
    },
];

export const gameCardsData: Card[] = [
    {
        id: '1',
        value: '1',
    },
    {
        id: '2',
        value: '13',
    },
    {
        id: '2',
        value: '13',
    },
];

export const fibonacciDeck: Card[] = [
    {
        id: '1',
        value: '1',
    },
    {
        id: '2',
        value: '2',
    },
    {
        id: '3',
        value: '3',
    },
    {
        id: '4',
        value: '5',
    },
    {
        id: '5',
        value: '8',
    },
    {
        id: '6',
        value: '13',
    },
    {
        id: '7',
        value: '21',
    },
    {
        id: '8',
        value: '34',
    },
    {
        id: '9',
        value: '55',
    },
    {
        id: '10',
        value: '89',
    },
];

export const powersOfTwoDeck: Card[] = [
    {
        id: '1',
        value: '2',
    },
    {
        id: '2',
        value: '4',
    },
    {
        id: '3',
        value: '8',
    },
    {
        id: '4',
        value: '16',
    },
    {
        id: '5',
        value: '32',
    },
    {
        id: '6',
        value: '64',
    },
    {
        id: '7',
        value: '128',
    },
    {
        id: '8',
        value: '256',
    },
];
export const statisticCardsData: StatisticCard[] = [
    {
        id: '1',
        value: '1',
        voteResult: '45%',
    },
    {
        id: '2',
        value: '13',
        voteResult: '10%',
    },
];

export const cardsBackground = [
    {
        id: '1',
        class: 'bgMountains',
    },
    {
        id: '2',
        class: 'bgMoon',
    },
    {
        id: '3',
        class: 'bgEagle',
    },
    {
        id: '4',
        class: 'bgLeaf',
    },
];

export const usersWithScore: UserWithScore[] = [
    {
        firstName: 'Lily',
        name: 'Lily Atkins',
        jobPosition: 'Senior',
        initials: 'LA',
        userID: '1',
        score: 'In progress',
        roleInGame: 'player',
    },
    {
        firstName: 'Barsik',
        name: 'Barsik',
        jobPosition: 'Junior lion',
        initials: 'BB',
        userID: '2',
        score: '5 SP',
        imgSrc: 'https://placekitten.com/200/200',
        roleInGame: 'player',
    },
    {
        firstName: 'Mark',
        name: 'Mark Zuckerberg',
        jobPosition: 'Facebook founder',
        initials: 'MZ',
        userID: '3',
        score: '1 SP',
        roleInGame: 'player',
    },
    {
        firstName: 'Alex',
        name: 'Alex',
        jobPosition: 'Junior',
        initials: 'AL',
        userID: '4',
        score: '10 SP',
        roleInGame: 'player',
    },
    {
        firstName: 'Mike',
        name: 'Mike Smith',
        jobPosition: 'Middle',
        initials: 'MS',
        userID: '5',
        score: 'In progress',
        roleInGame: 'player',
    },
];

export const selectedCards: Array<{ card: Card; user: User }> = [
    {
        card: { id: '1', value: '1' },
        user: {
            firstName: 'Lily',
            lastName: 'Atkins',
            roleInGame: 'dealer',
            jobPosition: 'Senior',
            initials: 'LA',
            userID: '1',
        },
    },
    {
        card: { id: '2', value: '2' },
        user: {
            firstName: 'Barsik',
            roleInGame: 'player',
            jobPosition: 'Junior lion',
            initials: 'BB',
            userID: '2',
            imgSrc: 'https://placekitten.com/200/200',
        },
    },
    {
        card: { id: '3', value: '3' },
        user: {
            firstName: 'Alex',
            roleInGame: 'observer',
            jobPosition: 'Junior',
            initials: 'AL',
            userID: '4',
        },
    },
];

export const issues: Issue[] = [
    {
        id: '5',
        current: true,
        name: 'Issue 123',
        priority: 'Critical',
        score: '-',
    },
    {
        id: '4',
        current: false,
        name: 'Issue 135',
        priority: 'High',
        score: '-',
    },
    {
        id: '3',
        current: false,
        name: 'Issue 144',
        priority: 'Medium',
        score: '-',
    },
    {
        id: '2',
        current: false,
        name: 'Issue 162',
        priority: 'Low',
        score: '-',
    },
    {
        id: '1',
        current: false,
        name: 'Issue 163',
        priority: 'Low',
        score: '-',
    },
];

export const cardsDeck: Card[] = [
    {
        id: '1',
        value: '1',
    },
    {
        id: '2',
        value: '2',
    },
    {
        id: '3',
        value: '3',
    },
    {
        id: '4',
        value: '5',
    },
    {
        id: '5',
        value: '8',
    },
    {
        id: '6',
        value: '13',
    },
];
