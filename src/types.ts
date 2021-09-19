export interface IUserCard {
    currentUser?: boolean;
    name: string;
    position: string;
    initials: string;
    imgSrc?: string;
    kickID: number;
    id: number;
}

export interface IIssues {
    name: string;
    dealer: boolean;
    current: boolean;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    id: number;
}

export interface ICard {
    value: number;
    scoreType: string;
    isEditable: boolean;
    id: number;
}

export interface IMessage {
    firstName: string;
    lastName?: string;
    image?: File;
    job?: string;
    id: string;
    text: string;
}
