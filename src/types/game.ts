import { ChatMessage } from './ChatMessage';
import { User } from './user';

export interface Game {
    gameID: string;
    status: 'new' | 'pending' | 'going' | 'over';
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
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
}
export interface Card {
    id: number;
    value: number;
    scoreType: string;
    isEditable: boolean;
}
