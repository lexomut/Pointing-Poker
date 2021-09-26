import { Dispatch } from 'react';
import { Game } from './game';
import { WSMessageBody } from './WSMessageBody';
import { ChatMessage } from './ChatMessage';
import { User } from './user';

export interface GlobalState {
    game: Game;
    currentUser: CurrentUser;
    ws: WS;
}

export interface CurrentUser extends User {
    anything?: string;
}

export interface WS {
    socket?: WebSocket;
    status: boolean;
    provider: WSProviderInterface | undefined;
}

export interface WSProviderInterface {
    globalDispatch: Dispatch<Action>;
    currentUser: CurrentUser | undefined;
    game: Game | undefined;
    socket: WebSocket | undefined;
    connects: () => Promise<void>;
    send(messObj: WSMessageBody): Promise<void>;
    sendChatMessage(text: string): Promise<void>;
    updateProviderState: (arg: GlobalState) => void;
}

export type Action =
    | { type: 'addChatMessage'; payLoad: ChatMessage }
    | { type: 'setSocket'; payLoad: WebSocket }
    | { type: 'setSocketStatus'; payLoad: boolean }
    | { type: 'addWSProviderToGlobalState'; payLoad: WSProviderInterface }
    | { type: 'setGame'; payLoad: Game }
    | { type: 'setCurrentUser'; payLoad: CurrentUser }
    | { type: 'initGame'; payLoad: Game }
    | { type: 'userConnection'; payLoad: User };
