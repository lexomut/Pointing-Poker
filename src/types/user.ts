export interface User {
    userID: string;
    firstName: string;
    lastName?: string;
    roleInGame: 'observer' | 'player' | 'dealer';
    jobPosition?: string;
    imgSrc?: string;
    initials: string;
    size?: string;
}
