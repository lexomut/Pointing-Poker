import { Dispatch } from 'react';
import { Card, Game, GameSettingsInterface } from './game';
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
    SET_POPUP,
    SET_GAME_SETTINGS,
    SHOW_CHAT,
    SET_GAME_TEMP_SETTINGS,
} from '../state/ActionTypesConstants';
import { USER_CONNECTION } from '../api/Constants';

export interface GlobalState {
    game: Game;
    currentUser: CurrentUser;
    ws: WS;
    popup: PopupType;
    chatOpen: boolean;
    temporaryDialerSettings: TemporaryDialerSettings;
}
export type PopupType = 'createIssue' | 'kickUser' | '' | 'createCard' | 'editCard';
export interface CurrentUser extends User {
    anything?: string;
}
export interface TemporaryDialerSettings {
    gameSettings: GameSettingsInterface;
    cards: Array<Card>;
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
    changeValueOfGameProperty: (property: string, value: any) => Promise<void>;
    sendVote: (vote: boolean) => Promise<void>;
    sendChooseCard: (card: Card) => Promise<void>;
}

export type Action =
    | { type: typeof ADD_CHAT_MESSAGE; payLoad: ChatMessage }
    | { type: typeof SET_SOCKET; payLoad: WebSocket }
    | { type: typeof SET_SOCKET_STATUS; payLoad: boolean }
    | { type: typeof ADD_WS_PROVIDER_TO_GLOBAL_STATE; payLoad: WSProviderInterface }
    | { type: typeof SET_GAME; payLoad: Game }
    | { type: typeof SET_CURRENT_USER; payLoad: CurrentUser }
    | { type: typeof INIT_GAME; payLoad: Game }
    | { type: typeof USER_CONNECTION; payLoad: User }
    | { type: typeof SET_POPUP; payLoad: PopupType }
    | { type: typeof SET_GAME_SETTINGS; payLoad: GameSettingsInterface }
    | { type: typeof SHOW_CHAT; payLoad: undefined }
    | {
          type: typeof SET_GAME_TEMP_SETTINGS;
          payLoad: { property: string; value: GameSettingsInterface | Card[] | string };
      };
