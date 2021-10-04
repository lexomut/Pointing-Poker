import { Card } from '../types/game';

export interface Author {
    id: string;
    name: string;
    link: string;
}

export interface StatisticCard extends Card {
    voteResult: string;
}

export interface UserWithScore {
    currentUser?: boolean;
    name: string;
    jobPosition: string;
    initials: string;
    imgSrc?: string;
    userID: string;
    score: string;
    roleInGame: 'observer' | 'dealer' | 'player';
}
