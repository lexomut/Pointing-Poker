import { Dispatch } from 'react';
import { Game } from './game';
import { WSMessageBody } from './WSMessageBody';
import { ChatMessage } from './ChatMessage';

export interface GlobalState {
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
    provider: WSProviderInterface | undefined;
}

export interface WSProviderInterface {
    globalDispatch: Dispatch<Action>;
    currentUser: CurrentUser;
    game: Game;
    socket: WebSocket | undefined;
    connects: () => Promise<void>;
    send(messObj: WSMessageBody): Promise<void>;
    sendChatMessage(text: string): Promise<void>;
}

export type Action =
    | { type: 'addChatMessage'; payLoad: ChatMessage }
    | { type: 'setSocket'; payLoad: WebSocket }
    | { type: 'setSocketStatus'; payLoad: boolean }
    | { type: 'addWSProviderToGlobalState'; payLoad: WSProviderInterface }
    | { type: 'setGame'; payLoad: Game };
