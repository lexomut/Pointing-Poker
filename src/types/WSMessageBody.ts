export interface WSMessageBody {
    gameID: string;
    userID: string;
    event: WSMessageEvent;
    userName: string;
    chatMessage?: string;
    gameProperty?: string;
    value?: string;
}
type WSMessageEvent = 'userConnection' | 'message' | 'setGameState';
