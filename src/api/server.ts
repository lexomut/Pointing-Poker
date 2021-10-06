import axios from 'axios';
import { Game } from '../types/game';
import { SERVER_URL } from './url';

export async function connectGame(id: string): Promise<undefined | Game> {
    if (!id) throw new Error('нет ID');
    try {
        const response = await axios.get(`${SERVER_URL}game/${id}`);
        if (response.status === 200) return response.data;
        return undefined;
    } catch (e) {
        return undefined;
    }
}

export const createGame = async (): Promise<undefined | Game> => {
    try {
        const response = await axios.post(`${SERVER_URL}game`);
        if (response.status === 200) {
            return response.data;
        }
        // eslint-disable-next-line no-console
        console.log('ошибка сoздания игры на сервере ');
        return undefined;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('ошибка соединения с сервером , ');
        return undefined;
    }
};
