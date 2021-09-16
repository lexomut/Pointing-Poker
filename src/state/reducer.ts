import { GlobalState } from '../types/GlobalState';
// eslint-disable-next-line import/no-cycle
import { WSProvider } from '../api/WSProvider';
import {
    Action,
    ADD_CHAT_MESSAGE,
    ADD_WS_PROVIDER_TO_GLOBAL_STATE,
    SET_SOCKET,
    SET_SOCKET_STATUS,
    SET_GAME,
} from './ActionTypes';

export function reducer(globalState: GlobalState, action: Action): GlobalState {
    switch (action.type) {
        case ADD_CHAT_MESSAGE: {
            const chatMessage = action.payLoad;
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
            const globalDispatcher = action.payLoad;
            const state = globalState;
            state.ws.provider = new WSProvider(globalState, globalDispatcher);
            return state;
        }
        case SET_GAME: {
            const game = action.payLoad;
            return { ...globalState, game };
        }

        default:
            throw new Error('unknown action');
    }
}
