import { ChatMessage } from './ChatMessage';
import { User } from './user';

export interface Game {
    title: string;
    gameID: string | undefined;
    status: 'new' | 'pending' | 'going' | 'over' | 'canceled';
    users: Array<User>;
    chatMessages: Array<ChatMessage>;
    startTimer: Date | undefined;
    dealer: User;
    issues: Array<Issue>;
    cards: Array<Card>;
    selectedCards: Array<{ card: Card; user: User }>;
    gameSettings: GameSettings;
}

export interface GameSettings {
    timer?: number;
    dealerIsPlaying: boolean;
    scoreType: string;
    shortScoreType: string;
}

export interface Issue {
    id: string;
    name: string;
    current?: boolean;
    priority: Priority;
    dealer: boolean;
    link?: string;
}
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';
export interface Card {
    id: number;
    value: number;
    scoreType: string;
    isEditable: boolean;
}
