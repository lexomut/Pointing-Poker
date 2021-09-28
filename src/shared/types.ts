export interface Author {
    id: number;
    name: string;
    link: string;
}

export interface Card {
    id: number;
    value: number;
    scoreType: string;
    isEditable: boolean;
}

export interface StatisticCard extends Card {
    voteResult: string;
}

export interface UserWithScore {
    currentUser?: boolean;
    name: string;
    position: string;
    initials: string;
    imgSrc?: string;
    userID: number;
    score: string;
}

export interface Issue {
    current?: boolean;
    name: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
}
