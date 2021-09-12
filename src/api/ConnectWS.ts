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
    ): Promise<WebSocket> {
        const url = `ws://${SERVER_URL.split('://')[1]}/ws`;
        this.socket = new WebSocket(url);
        this.socket.onopen = async () => {
            await this.socket?.send(JSON.stringify({ ...messageBody, event: 'userConnection' }));
            // console.log('подключение c сервером установлено');
        };
        this.socket.onmessage = (event) => {
            let message: WSMessageBody = dummy;
            try {
                message = JSON.parse(event.data);
            } catch (e) {
                console.log(event.data, '  ', e);
            }
            HandlerMessageWS(message, dispatch);
        };
        return this.socket;
    }

    send(messObj: WSMessageBody): void {
        if (this.socket) this.socket.send(JSON.stringify(messObj));
    }
}
export const connect = new Connect();
