import axios from 'axios';
import { SERVER_URL } from './url';

export async function joinValidation(id: string): Promise<boolean> {
    try {
        const response = await axios.get(`${SERVER_URL}/game/${id}`);
        return response.status === 200;
    } catch (e) {
        return false;
    }
}
