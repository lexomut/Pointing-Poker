import axios from 'axios';
import { SERVER_URL } from './url';

export async function connectGame(id: string): Promise<boolean | Game> {
    try {
        const response = await axios.get(`${SERVER_URL}game/${id}`);
        if (response.status === 200) return response.data;
        return false;
    } catch (e) {
        return false;
    }
}

export const createGame = async (): Promise<boolean | Game> => {
    try {
        const response = await axios.post(`${SERVER_URL}game`);
        if (response.status === 200) return response.data;
        return false;
    } catch (e) {
        return false;
    }
};
