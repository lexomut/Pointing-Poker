import { Dispatch } from 'react';
import { WSMessageBody } from '../types/WSMessageBody';
import { SERVER_URL } from './url';
import { WSMessageHandler } from './WSMessageHandler';
import { Action, CurrentUser, GlobalState, WSProviderInterface } from '../types/GlobalState';
import { Game } from '../types/game';
import { CHAT_MESSAGE, USER_CONNECTION } from './Constants';
import { SET_SOCKET, SET_SOCKET_STATUS } from '../state/ActionTypesConstants';
import { ChatMessage } from '../types/ChatMessage';

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
            // console.log('Open new WebSocket connection');

            this.socket.onopen = async () => {
                const connectionMessage: WSMessageBody = {
                    user: this.currentUser,
                    gameID: this.game.gameID,
                    event: USER_CONNECTION,
                };
                this.globalDispatch({ type: SET_SOCKET_STATUS, payLoad: true });
                await this.socket?.send(JSON.stringify(connectionMessage));
            };
        } catch {
            // // eslint-disable-next-line no-console
            // console.log('Ошибка соединения с сервером');
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
            let message: WSMessageBody = {
                user: this.currentUser,
                gameID: '',
                event: 'userConnection',
            };
            try {
                message = JSON.parse(event.data);
                // // eslint-disable-next-line no-console
                // console.log('Получено сообщение с типом:', message.event);
            } catch (e) {
                // // eslint-disable-next-line no-console
                // console.log(event.data, '  ', e);
            }
            WSMessageHandler(message, this.globalDispatch);
        };
    }

    async send(messObj: WSMessageBody): Promise<void> {
        try {
            if (!this.socket) return;
            await this.socket.send(JSON.stringify(messObj));
        } catch (e) {
            // // eslint-disable-next-line no-console
            // console.log('Ошибка отправки', e);
        }
    }

    async sendChatMessage(text: string): Promise<void> {
        const chatMessage: ChatMessage = {
            user: this.currentUser,
            text,
            id: new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
            date: new Date(),
        };
        const message: WSMessageBody = {
            gameID: this.game.gameID,
            user: this.currentUser,
            event: CHAT_MESSAGE,
            chatMessage,
        };
        await this.send(message);
    }
}
