import { Card } from '../types/game';
import { User } from '../types/user';

export interface Author {
    id: string;
    name: string;
    link: string;
}

export interface StatisticCard extends Card {
    voteResult: string;
}

export interface UserWithScore extends User {
    currentUser?: boolean;
    name: string;
    score: string;
}
