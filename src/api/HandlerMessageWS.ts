import { WSMessageBody } from '../types/WSMessageBody';
import { Action } from '../state/reduser';

export function HandlerMessageWS(message: WSMessageBody, dispatch: (arg: Action) => unknown): void {
    switch (message.event) {
        case 'userConnection': {
            console.log(`пользователь ${message.userName} подключился`);
            dispatch({
                type: 'addChatMessage',
                payLoad: {
                    chatMessage: {
                        author: '',
                        text: `пользователь ${message.userName} подключился`,
                    },
                },
            });
            break;
        }
        case 'message':
            console.log(
                `пользователь ${message.userName} написал сообшение: ${message.chatMessage}`,
            );
            dispatch({
                type: 'addChatMessage',
                payLoad: {
                    chatMessage: {
                        author: message.userName,
                        text: `${message.chatMessage}`,
                    },
                },
            });
            break;
        case 'setGameState':
            console.log(
                `пользователь ${message.userName} изменил значение в поле ${message.gameProperty} на ${message.value} `,
            );
            break;
        default:
            break;
    }
}
