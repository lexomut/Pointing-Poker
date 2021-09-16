import { Author, Card } from './types';

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
