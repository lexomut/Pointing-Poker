export interface IUserCard {
    currentUser?: boolean;
    name: string;
    jobPosition: string;
    imgSrc?: string;
    UserID: number;
    initials: string;
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

export interface IFormData {
    firstName: string;
    lastName?: string;
    job?: string;
    isObserver: boolean;
    image?: File;
}
