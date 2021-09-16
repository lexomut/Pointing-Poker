import { ChatMessage } from './ChatMessage';
import { Game } from './game';

export interface State {
    chatMessages: Array<ChatMessage>;
    game: Game;
    currentUser: CurrentUser;
    ws: WS;
}

export interface CurrentUser {
    firstName: string;
    lastName?: string;
    userID: string;
    jobPosition: JobPosition;
}
export type JobPosition = 'observer' | 'user' | 'dialer';

export interface WS {
    socket?: WebSocket;
    status: boolean;
}
