import { Dispatch } from 'react';
import { WSMessageBody } from '../types/WSMessageBody';
import { SERVER_URL } from './url';
import { WSMessageHandler } from './WSMessageHandler';
import { Action, CurrentUser, GlobalState, WSProviderInterface } from '../types/GlobalState';
import { Game } from '../types/game';
import { CHAT_MESSAGE, SET_GAME_STATE, USER_CONNECTION, VOTE } from './Constants';
import { SET_SOCKET, SET_SOCKET_STATUS } from '../state/ActionTypesConstants';
import { ChatMessage } from '../types/ChatMessage';

export class WSProvider implements WSProviderInterface {
    globalDispatch: Dispatch<Action>;

    currentUser: CurrentUser | undefined;

    game: Game | undefined;

    socket: WebSocket | undefined;

    constructor(globalDispatch: Dispatch<Action>) {
        this.currentUser = undefined;
        this.game = undefined;
        this.globalDispatch = globalDispatch;
    }

    async connects(): Promise<void> {
        const url = `ws://${SERVER_URL.split('://')[1]}ws`;
        try {
            if (!this.game?.gameID) throw new Error('нет gameID');
            this.socket = new WebSocket(url);
            this.socket.onopen = async () => {
                if (!this.game?.gameID || !this.currentUser) return;
                const connectionMessage: WSMessageBody = {
                    user: this.currentUser,
                    gameID: this.game.gameID,
                    event: USER_CONNECTION,
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
            if (!this.currentUser) return;
            let message: WSMessageBody = {
                user: this.currentUser,
                gameID: '',
                event: 'userConnection',
            };
            try {
                message = JSON.parse(event.data);
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(event.data, '  ', e);
            }
            WSMessageHandler(message, this.globalDispatch);
        };
    }

    async send(messObj: WSMessageBody): Promise<void> {
        if (!this.socket) return;
        try {
            await this.socket.send(JSON.stringify(messObj));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Ошибка отправки', e);
        }
    }

    async sendChatMessage(text: string): Promise<void> {
        if (!this.game?.gameID || !this.currentUser) return;
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

    updateProviderState(globalState: GlobalState) {
        this.currentUser = globalState.currentUser;
        this.game = globalState.game;
    }

    async changeValueOfGameProperty(gameProperty: string, value: any) {
        if (!this.game?.gameID || !this.currentUser) return;
        const keys = Object.keys(this.game);
        try {
            if (!keys.includes(gameProperty)) throw new Error('нет такого поля у объекта игры');
            const message: WSMessageBody = {
                gameID: this.game.gameID,
                user: this.currentUser,
                event: SET_GAME_STATE,
                gameProperty,
                value,
            };
            await this.send(message);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Ошибка отправки', e);
        }
    }

    async sendVote(vote: boolean) {
        if (!this.game?.gameID || !this.currentUser) return;

        try {
            if (!this.game.vote) throw new Error('нет голосования');
            const message: WSMessageBody = {
                gameID: this.game.gameID,
                user: this.currentUser,
                event: VOTE,
                vote,
            };
            await this.send(message);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Ошибка отправки', e);
        }
    }
}
