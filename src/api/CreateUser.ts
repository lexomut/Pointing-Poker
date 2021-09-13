import axios from 'axios';
import { User } from '../types/user';
import { SERVER_URL } from './url';

export interface CreateUser {
    firstName: string;
    lastNme?: string;
    jobPosition?: "observer"|"player"| "dealer";
    avatar?: File | undefined;
}
export async function createUser({
    firstName,
    lastNme,
    jobPosition,
    avatar,
}: CreateUser): Promise<User | string> {
    const formData = new FormData();
    formData.append('userConfig', JSON.stringify({ firstName, lastNme, jobPosition }));
    if (avatar) formData.append('avatar', avatar);
    try {
        const response = await axios({
            method: 'post',
            url: `${SERVER_URL}/player/`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data as User;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // TODO :уточнение ошибок
        return `чтото пошло не так   ${error.response.data}`;
    }
}
