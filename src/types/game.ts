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
    selectedCards: Array<{ card: Card | undefined; user: User }>;
    gameSettings: GameSettingsInterface;
    vote: Vote | undefined;
    kickedUsersID: string[];
    pendingUsers: User[];
    round: Round;
    statistic: { issue: Issue; statisticCards: StatisticCard[] }[];
}
export interface Round {
    roundID: string;
    issueID: string;
    status: 'pending' | 'going' | 'over';
}
export interface Vote {
    author: User;
    yes: number;
    no: number;
    kickID: string;
    votedUsersID: string[];
}

export interface GameSettingsInterface {
    timer: number;
    dealerIsPlaying: boolean;
    scoreType: string;
    shortScoreType: string;
    isTimerNeeded: boolean;
    changingCardInRoundEnd: boolean;
    cardsDeckType: string;
    freeGameEnter: boolean;
    cardsBackClass: string;
}

export interface Issue {
    id: string;
    name: string;
    priority: Priority;
    current?: boolean;
    dealer?: boolean;
    link?: string;
    score: string;
}
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Card {
    id: string;
    value: string;
}
export interface StatisticCard extends Card {
    voteResult: string;
}
