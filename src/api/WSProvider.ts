import { Dispatch } from 'react';
import { WSMessageBody } from '../types/WSMessageBody';
import { SERVER_URL } from './url';
import { WSMessageHandler } from './WSMessageHandler';
import { Action, CurrentUser, GlobalState, WSProviderInterface } from '../types/GlobalState';
import { Game } from '../types/game';
import { CHAT_MESSAGE, USER_CONNECTION } from './Constants';
import { SET_SOCKET, SET_SOCKET_STATUS } from '../state/ActionTypesConstants';
import { ChatMessage } from '../types/ChatMessage';

const stub: WSMessageBody = {
    userID: '',
    gameID: '',
    event: 'userConnection',
    userName: '',
};

export class WSProvider implements WSProviderInterface {
    globalDispatch: Dispatch<Action>;

    currentUser: CurrentUser;

    game: Game;

    socket: WebSocket | undefined;

    constructor({ currentUser, game }: GlobalState, globalDispatch: Dispatch<Action>) {
        this.globalDispatch = globalDispatch;
        this.currentUser = currentUser;
        this.game = game;
    }

    async connects(): Promise<void> {
        const url = `ws://${SERVER_URL.split('://')[1]}ws`;
        try {
            this.socket = new WebSocket(url);
            // eslint-disable-next-line no-console
            console.log('Open new WebSocket connection');

            this.socket.onopen = async () => {
                const connectionMessage: WSMessageBody = {
                    userID: this.currentUser.userID,
                    // eslint-disable-next-line no-underscore-dangle
                    gameID: this.game.gameID,
                    event: USER_CONNECTION,
                    userName: `${this.currentUser.firstName} ${this.currentUser?.firstName}` || '',
                };
                this.globalDispatch({ type: SET_SOCKET_STATUS, payLoad: true });
                if (!this.socket) throw new Error();
                await this.socket?.send(JSON.stringify(connectionMessage));
            };
        } catch {
            // eslint-disable-next-line no-console
            console.log('Ошибка соединения с сервером');
        }
        if (!this.socket) return;

        this.globalDispatch({ type: SET_SOCKET, payLoad: this.socket });

        this.socket.onclose = () => {
            this.globalDispatch({ type: SET_SOCKET_STATUS, payLoad: false });
            setTimeout(() => {
                this.connects();
            }, 5000);
        };
        this.socket.onmessage = (event) => {
            let message: WSMessageBody = stub;
            try {
                message = JSON.parse(event.data);
                // eslint-disable-next-line no-console
                console.log('Получено сообщение с типом:', message.event);
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(event.data, '  ', e);
            }
            WSMessageHandler(message, this.globalDispatch);
        };
    }

    async send(messObj: WSMessageBody): Promise<void> {
        try {
            if (!this.socket) return;
            await this.socket.send(JSON.stringify(messObj));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Ошибка отправки', e);
        }
    }

    async sendChatMessage(text: string): Promise<void> {
        const chatMessage: ChatMessage = {
            userID: this.currentUser.userID,
            text,
            id: new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
            userName: this.currentUser.firstName,
            date: new Date(),
        };
        const message: WSMessageBody = {
            gameID: this.game.gameID,
            userID: this.currentUser.userID,
            event: CHAT_MESSAGE,
            userName: this.currentUser.firstName,
            chatMessage,
        };
        await this.send(message);
    }
}
