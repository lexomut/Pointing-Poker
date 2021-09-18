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
