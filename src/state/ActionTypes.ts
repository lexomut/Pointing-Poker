import { Dispatch } from 'react';
import { ChatMessage } from '../types/ChatMessage';
import { Game } from '../types/game';

export const ADD_CHAT_MESSAGE = 'addChatMessage';
export const SET_SOCKET = 'setSocket';
export const SET_SOCKET_STATUS = 'setSocketStatus';
export const ADD_WS_PROVIDER_TO_GLOBAL_STATE = 'addWSProviderToGlobalState';
export const SET_GAME = 'setGame';

export type Action =
    | { type: 'addChatMessage'; payLoad: ChatMessage }
    | { type: 'setSocket'; payLoad: WebSocket }
    | { type: 'setSocketStatus'; payLoad: boolean }
    | { type: 'addWSProviderToGlobalState'; payLoad: Dispatch<Action> }
    | { type: 'setGame'; payLoad: Game };
