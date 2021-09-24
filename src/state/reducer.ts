import { ChatMessage } from '../types/ChatMessage';
import { Action, GlobalState } from '../types/GlobalState';
import {
    ADD_CHAT_MESSAGE,
    ADD_WS_PROVIDER_TO_GLOBAL_STATE,
    SET_SOCKET,
    SET_SOCKET_STATUS,
    SET_GAME,
    SET_CURRENT_USER,
    INIT_GAME,
} from './ActionTypesConstants';

export function reducer(globalState: GlobalState, action: Action): GlobalState {
    switch (action.type) {
        case ADD_CHAT_MESSAGE: {
            const chatMessage = action.payLoad;
            const arr: Array<ChatMessage> = globalState.game.chatMessages;
            if (arr.filter((message) => message.id !== chatMessage.id).length < 0)
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
            const state = globalState;
            state.ws.socket = socket;
            return { ...state };
        }
        case SET_SOCKET_STATUS: {
            const status = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, status } };
        }
        case ADD_WS_PROVIDER_TO_GLOBAL_STATE: {
            const provider = action.payLoad;
            const state = globalState;
            state.ws.provider = provider;
            return state;
        }
        case INIT_GAME: {
            const game = action.payLoad;
            return { ...globalState, game };
        }

        case SET_GAME: {
            const game = action.payLoad;
            game.gameID = globalState.game.gameID;
            return { ...globalState, game: { ...globalState.game, ...game } };
        }
        case SET_CURRENT_USER: {
            const currentUser = action.payLoad;
            const state = globalState;
            state.currentUser = currentUser;
            return state;
        }

        default:
            throw new Error('unknown action');
    }
}
