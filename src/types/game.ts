import { ChatMessage } from './ChatMessage';

export interface Game {
    gameID: string;
    status: 'new' | 'pending' | 'going' | 'over';
    users: Array<string>;
    chatMessages: Array<ChatMessage>;
}
