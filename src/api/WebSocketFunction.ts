import { WSMessageBody } from '../types/WSMessageBody';
import { SERVER_URL } from './url';
import { wsMessageHandler } from './WSMessageHendler';

const dummy: WSMessageBody = {
    userID: '',
    gameID: '',
    event: 'userConnection',
    userName: '',
};

class Connect {
    private socket: WebSocket | undefined;

    connect(messageBody: WSMessageBody) {
        const url = `ws://${SERVER_URL.split('://')[1]}/ws`;
        this.socket = new WebSocket(url);
        this.socket.onopen = () => {
            this.socket?.send(JSON.stringify({ ...messageBody, event: 'userConnection' }));
            // console.log('подключение c сервером установлено');
        };
        this.socket.onmessage = (event) => {
            let message: WSMessageBody = dummy;
            try {
                message = JSON.parse(event.data);
            } catch (e) {
                console.log(event.data, '  ', e);
            }
            wsMessageHandler(message);
        };
    }

    send(messObj: WSMessageBody): void {
        if (this.socket) this.socket.send(JSON.stringify(messObj));
    }
}
export const connect = new Connect();
