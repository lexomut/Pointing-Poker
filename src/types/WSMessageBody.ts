import { ChatMessage } from './ChatMessage';
import { Game } from './game';
import { User } from './user';

export interface WSMessageBody {
    gameID: string;
    user: User;
    event: WSMessageEvent;
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
