import { Game } from './game';
// eslint-disable-next-line import/no-cycle
import { WSProvider } from '../api/WSProvider';

export interface GlobalState {
    game: Game;
    currentUser: CurrentUser;
    ws: WS;
}

export interface CurrentUser {
    firstName: string;
    lastName?: string;
    userID: string;
    jobPosition: JobPosition;
}
export type JobPosition = 'observer' | 'user' | 'dialer';

export interface WS {
    socket?: WebSocket;
    status: boolean;
    provider: WSProvider | undefined;
}
