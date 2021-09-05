import axios from 'axios';
import SERVER_URL from './url';

async function joinValidation(id: string): Promise<boolean> {
    try {
        const response = await axios.get(`${SERVER_URL}/game/${id}`);
        if (response.status === 200) return true;
        return false;
    } catch (e) {
        return false;
    }
}
export default joinValidation;
