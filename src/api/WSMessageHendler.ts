import { WSMessageBody } from '../types/WSMessageBody';

export function wsMessageHandler(message: WSMessageBody): void {
    switch (message.event) {
        case 'userConnection':
            console.log(`пользователь ${message.userName} подключился`);
            break;
        case 'message':
            console.log(
                `пользователь ${message.userName} написал сообшение: ${message.chatMessage}`,
            );
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
