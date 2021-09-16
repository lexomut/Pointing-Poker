import { WSMessageBody } from '../types/WSMessageBody';
import { Action } from '../state/reduser';

export function HandlerMessageWS(message: WSMessageBody, dispatch: (arg: Action) => unknown): void {
    switch (message.event) {
        case 'userConnection': {
            console.log(`пользователь ${message.userName} подключился`);
            dispatch({
                type: 'addChatMessage',
                payLoad: {
                    userID: message.userID,
                    userName: message.userName,
                    date: new Date(),
                    id: new Date().toDateString(),
                    text: `пользователь ${message.userName} подключился`,
                },
            });
            break;
        }
        case 'message':
            console.log(
                `пользователь ${message.userName} написал сообшение: ${message.chatMessage?.text}`,
            );
            if (!message.chatMessage) return;
            dispatch({
                type: 'addChatMessage',
                payLoad: message.chatMessage,
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
