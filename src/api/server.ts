import axios from 'axios';
import { IFormData } from '../types';

const baseURL = 'http://localhost:5000';

export async function connectGame(url: string): Promise<boolean> {
    try {
        const response = await axios.get(url);
        if (response.status === 200) return true;
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const createUser = async (userData: IFormData): Promise<boolean> => {
    try {
        const response = await axios.post(`${baseURL}/user`, userData);
        if (response.status === 200) return true;
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const createGame = async () => {
    try {
        const response = await axios.post(`${baseURL}/game`);
        if (response.status === 200) return true;
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
};
