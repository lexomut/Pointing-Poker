import axios from 'axios';
import { User } from '../types/user';
import { SERVER_URL } from './url';

export interface CreateUserInterface {
    firstName: string;
    lastName?: string;
    jobPosition: string;
    role?: 'dealer' | 'observer' | 'player';
    avatar?: File | undefined;
}
export async function createUser({
    firstName,
    lastName,
    role,
    jobPosition,
    avatar,
}: CreateUserInterface): Promise<User | undefined> {
    const formData = new FormData();
    formData.append('userConfig', JSON.stringify({ firstName, lastName, jobPosition, role }));
    if (avatar) formData.append('avatar', avatar);
    try {
        const response = await axios({
            method: 'post',
            url: `${SERVER_URL}player/`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data as User;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        return undefined;
    }
}
