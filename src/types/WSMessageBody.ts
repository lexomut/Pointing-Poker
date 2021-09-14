import { ChatMessage } from './ChatMessage';

export interface WSMessageBody {
    gameID: string;
    userID: string;
    event: WSMessageEvent;
    userName: string;
    chatMessage?: ChatMessage;
    gameProperty?: string;
    value?: string;
    errorMessage?: string;
}
type WSMessageEvent = 'userConnection' | 'message' | 'setGameState' | 'initMessage' | 'error';
