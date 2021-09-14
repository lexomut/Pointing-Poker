import { WSMessageBody } from '../types/WSMessageBody';
import { SERVER_URL } from './url';
import { HandlerMessageWS } from './HandlerMessageWS';
import { Action } from '../state/reduser';

const dummy: WSMessageBody = {
    userID: '',
    gameID: '',
    event: 'userConnection',
    userName: '',
};

class Connect {
    private socket: WebSocket | undefined;

    async connect(
        messageBody: WSMessageBody,
        dispatch: (arg: Action) => unknown,
    ): Promise<WebSocket | void> {
        const url = `ws://${SERVER_URL.split('://')[1]}ws`;
        try {
            this.socket = new WebSocket(url);
            console.log('new WebSocket');
            if (!this.socket) {
                console.log('this.socket --', this.socket);
                return;
            }

            console.log('connect');

            this.socket.onopen = async () => {
                await this.socket?.send(
                    JSON.stringify({ ...messageBody, event: 'userConnection' }),
                );
                console.log('подключение c сервером установлено');
            };
        } catch {
            console.log('ошибка соединения с сервером');
        }
        if (!this.socket) {
            console.log('this.socket --', this.socket);
            return;
        }
        this.socket.onmessage = (event) => {
            let message: WSMessageBody = dummy;
            try {
                message = JSON.parse(event.data);
            } catch (e) {
                console.log(event.data, '  ', e);
            }
            HandlerMessageWS(message, dispatch);
        };
        // eslint-disable-next-line consistent-return
        return this.socket;
    }

    send(messObj: WSMessageBody): void {
        if (this.socket) this.socket.send(JSON.stringify(messObj));
    }
}
export const connect = new Connect();
