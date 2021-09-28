export interface IUserCard {
    currentUser?: boolean;
    name: string;
    jobPosition: string;
    imgSrc?: string;
    userID: string;
    initials: string;
}

export interface IIssues {
    name: string;
    dealer: boolean;
    current: boolean;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    id: string;
}

export interface ICard {
    value: string;
    scoreType: string;
    isEditable: boolean;
    id: string;
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
