import { ChatMessage } from '../types/ChatMessage';
import { Action, GlobalState } from '../types/GlobalState';
import {
    ADD_CHAT_MESSAGE,
    ADD_WS_PROVIDER_TO_GLOBAL_STATE,
    INIT_GAME,
    SET_CURRENT_USER,
    SET_GAME,
    SET_GAME_SETTINGS,
    SET_POPUP,
    SET_SOCKET,
    SET_SOCKET_STATUS,
    SHOW_CHAT,
} from './ActionTypesConstants';
import { USER_CONNECTION } from '../api/Constants';

export function reducer(globalState: GlobalState, action: Action): GlobalState {
    switch (action.type) {
        case ADD_CHAT_MESSAGE: {
            const chatMessage = action.payLoad;
            const messages: Array<ChatMessage> = globalState.game.chatMessages;
            if (messages.filter((message) => message.id !== chatMessage.id).length < 0)
                return globalState;
            return {
                ...globalState,
                game: {
                    ...globalState.game,
                    chatMessages: [...globalState.game.chatMessages, chatMessage],
                },
            };
        }
        case SET_SOCKET: {
            const socket = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, socket } };
        }
        case SET_SOCKET_STATUS: {
            const status = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, status } };
        }
        case ADD_WS_PROVIDER_TO_GLOBAL_STATE: {
            const provider = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, provider } };
        }
        case INIT_GAME: {
            const game = action.payLoad;

            return { ...globalState, game: { ...globalState.game, ...game } };
        }

        case SET_GAME: {
            const game = action.payLoad;
            return { ...globalState, game: { ...globalState.game, ...game } };
        }
        case SET_CURRENT_USER: {
            const currentUser = action.payLoad;
            return { ...globalState, currentUser };
        }
        case USER_CONNECTION: {
            const newUser = action.payLoad;
            if (globalState.game.users.every((user) => user.userID !== newUser.userID)) {
                return {
                    ...globalState,
                    game: { ...globalState.game, users: [...globalState.game.users, newUser] },
                };
            }
            return { ...globalState };
        }
        case SET_POPUP: {
            const popup = action.payLoad;
            return { ...globalState, popup };
        }
        case SET_GAME_SETTINGS: {
            const gameSettings = action.payLoad;
            return { ...globalState, game: { ...globalState.game, gameSettings } };
        }
        case SHOW_CHAT: {
            const chatOpen = !globalState.chatOpen;
            return { ...globalState, chatOpen };
        }

        default:
            throw new Error('unknown action');
    }
}
