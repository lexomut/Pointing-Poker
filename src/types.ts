export interface IMemberCard {
    firstName: string;
    lastName?: string;
    image?: File;
    job?: string;
    id?: string
}



export interface IIssues {
    issueNumber: string;
    priority: 'low' | 'high';
    id?: string;
}

export interface ICard {
    image?: File;
    rating: string;
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
