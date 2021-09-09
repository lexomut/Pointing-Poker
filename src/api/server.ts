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

export const createUser = async (userData: IFormData): Promise<void> => {
    (
        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
};

export const createGame = async () => {
    (
        await fetch(`${baseURL}/game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
};
