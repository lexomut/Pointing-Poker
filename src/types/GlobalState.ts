import { Dispatch } from 'react';
import { Game } from './game';
import { WSMessageBody } from './WSMessageBody';
import { ChatMessage } from './ChatMessage';
import { User } from './user';
import {
    ADD_CHAT_MESSAGE,
    ADD_WS_PROVIDER_TO_GLOBAL_STATE,
    SET_SOCKET,
    SET_SOCKET_STATUS,
    SET_GAME,
    SET_CURRENT_USER,
    INIT_GAME,
} from '../state/ActionTypesConstants';
import { USER_CONNECTION } from '../api/Constants';

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
    changeValueOfGameProperty: (arg1: string, arg2: any) => Promise<void>;
}

export type Action =
    | { type: typeof ADD_CHAT_MESSAGE; payLoad: ChatMessage }
    | { type: typeof SET_SOCKET; payLoad: WebSocket }
    | { type: typeof SET_SOCKET_STATUS; payLoad: boolean }
    | { type: typeof ADD_WS_PROVIDER_TO_GLOBAL_STATE; payLoad: WSProviderInterface }
    | { type: typeof SET_GAME; payLoad: Game }
    | { type: typeof SET_CURRENT_USER; payLoad: CurrentUser }
    | { type: typeof INIT_GAME; payLoad: Game }
    | { type: typeof USER_CONNECTION; payLoad: User };
