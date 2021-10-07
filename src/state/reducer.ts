import { ChatMessage } from '../types/ChatMessage';
import { Action, GlobalState } from '../types/GlobalState';
import {
    ADD_CHAT_MESSAGE,
    ADD_WS_PROVIDER_TO_GLOBAL_STATE,
    INIT_GAME,
    SET_CURRENT_USER,
    SET_GAME,
    SET_GAME_SETTINGS,
    SET_GAME_TEMP_SETTINGS,
    SET_POPUP,
    SET_SOCKET,
    SET_SOCKET_STATUS,
    SHOW_CHAT,
} from './ActionTypesConstants';
import { USER_CONNECTION } from '../api/Constants';
import { Card, GameSettingsInterface } from '../types/game';

export function reducer(globalState: GlobalState, action: Action): GlobalState {
    const { users, chatMessages } = globalState.game;
    switch (action.type) {
        case ADD_CHAT_MESSAGE: {
            const chatMessage = action.payLoad;
            const messages: Array<ChatMessage> = chatMessages;
            if (messages.filter((message) => message.id !== chatMessage.id).length < 0)
                return globalState;
            return {
                ...globalState,
                game: {
                    ...globalState.game,
                    chatMessages: [...chatMessages, chatMessage],
                },
            };
        }
        case SET_SOCKET: {
            const socket = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, socket } };
        }
        case SET_SOCKET_STATUS: {
            const socketStatus = action.payLoad;
            return { ...globalState, ws: { ...globalState.ws, status: socketStatus } };
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
            if (
                globalState.game.status === 'new' &&
                globalState.game.users.every((user) => user.userID !== newUser.userID)
            ) {
                return {
                    ...globalState,
                    game: { ...globalState.game, users: [...users, newUser] },
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
        case SET_GAME_TEMP_SETTINGS: {
            switch (action.payLoad.property) {
                case 'gameSettings': {
                    const gameSettings: GameSettingsInterface = action.payLoad
                        .value as GameSettingsInterface;
                    return {
                        ...globalState,
                        temporaryDialerSettings: {
                            ...globalState.temporaryDialerSettings,
                            gameSettings,
                        },
                    };
                }

                case 'cards': {
                    const cards: Array<Card> = action.payLoad.value as Array<Card>;
                    return {
                        ...globalState,
                        temporaryDialerSettings: {
                            ...globalState.temporaryDialerSettings,
                            cards,
                        },
                    };
                }
                default:
                    return { ...globalState };
            }
        }

        default:
            throw new Error('unknown action');
    }
}
