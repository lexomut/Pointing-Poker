export interface User {
    userID: string;
    firstName: string;
    lastName?: string;
    role: 'observer' | 'player' | 'dealer';
    jobPosition?: string;
    imgSrc?: string;
    initials: string;
    size?: string;
}
