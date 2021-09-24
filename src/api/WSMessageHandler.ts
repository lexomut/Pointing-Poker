import { ADD_CHAT_MESSAGE, SET_GAME } from '../state/ActionTypesConstants';
import { CHAT_MESSAGE, INIT_MESSAGE, SET_GAME_STATE } from './Constants';
import { WSMessageBody } from '../types/WSMessageBody';
import { Action } from '../types/GlobalState';

export function WSMessageHandler(message: WSMessageBody, dispatch: (arg: Action) => unknown): void {
    switch (message.event) {
        case INIT_MESSAGE: {
            if (!message.game) return;
            // // eslint-disable-next-line no-console
            // console.log('Dispatch: ', INIT_MESSAGE);
            dispatch({ type: SET_GAME, payLoad: message.game });
            break;
        }

        case CHAT_MESSAGE:
            // // eslint-disable-next-line no-console
            // console.log(
            //     `Пользователь ${message.user.firstName} написал сообщение: ${message.chatMessage?.text}`,
            // );
            if (!message.chatMessage) return;
            dispatch({
                type: ADD_CHAT_MESSAGE,
                payLoad: message.chatMessage,
            });
            break;
        case SET_GAME_STATE:
            // eslint-disable-next-line no-console
            // console.log(
            //     `Пользователь ${message.user.firstName} изменил значение в поле ${message.gameProperty} на ${message.value} `,
            // );
            break;
        default:
            break;
    }
}
