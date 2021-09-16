import { ChatMessage } from './ChatMessage';
import { Game } from './game';

export interface WSMessageBody {
    gameID: string;
    userID: string;
    event: WSMessageEvent;
    userName: string;
    chatMessage?: ChatMessage;
    gameProperty?: string;
    value?: string;
    errorMessage?: string;
    game?: Game;
}
export type WSMessageEvent =
    | 'userConnection'
    | 'chatMessage'
    | 'setGameState'
    | 'initMessage'
    | 'error';
