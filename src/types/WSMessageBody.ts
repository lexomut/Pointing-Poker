import { ChatMessage } from './ChatMessage';
import { Card, Game } from './game';
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
    vote?: boolean;
    card?: Card;
}
export type WSMessageEvent =
    | 'userConnection'
    | 'chatMessage'
    | 'setGameState'
    | 'initMessage'
    | 'vote'
    | 'error'
    | 'chooseCard';
