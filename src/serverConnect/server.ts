import { IFormData } from '../types';

const baseURL = 'http://localhost:5000/';

const createUser = async (userData: IFormData): Promise<void> => {
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

export default createUser;
