import axios from 'axios';
import { Game } from '../types/game';
import { SERVER_URL } from './url';

export async function connectGame(id: string): Promise<false | Game> {
    if (!id) throw new Error('нет ID');
    try {
        const response = await axios.get(`${SERVER_URL}game/${id}`);
        if (response.status === 200) return response.data;
        return false;
    } catch (e) {
        return false;
    }
}

export const createGame = async (): Promise<false | Game> => {
    try {
        const response = await axios.post(`${SERVER_URL}game`);
        if (response.status === 200) {
            console.log('response.data ', response.data);
            return response.data;
        }
        console.log('ошибка сoздания игры на сервере ');
        return false;
    } catch (e) {
        console.log('ошибка соединения с сервером , ');
        return false;
    }
};
