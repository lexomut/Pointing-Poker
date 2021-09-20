export interface User {
    _id: string;
    firstName: string;
    lastNme?: string;
    jobPosition: 'observer' | 'player' | 'dealer';
    avatarUrl?: string;
}
