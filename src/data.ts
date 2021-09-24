import { ICard, IIssues, IMessage, IUserCard } from './types';

export const users: IUserCard[] = [
    { name: 'nick kave', jobPosition: 'dev', initials: 'AB', userID: 222 },
    { name: 'mike bzhezinsky', jobPosition: 'design', initials: 'AB', userID: 223 },
    { name: 'john smith', jobPosition: 'batman', initials: 'AB', userID: 224 },
    { name: 'miranda harris', jobPosition: 'cleaner', initials: 'AB', userID: 225 },
    { name: 'miranda harris', jobPosition: 'cleaner', initials: 'AB', userID: 226 },
    { name: 'miranda harris', jobPosition: 'cleaner', initials: 'AB', userID: 227 },
];

export const issues: IIssues[] = [
    { name: '445', priority: 'Low', current: true, dealer: false, id: 111 },
    { name: '211', priority: 'Critical', current: false, dealer: true, id: 112 },
    { name: '44445', priority: 'High', current: false, dealer: false, id: 113 },
    { name: '44545', priority: 'Medium', current: false, dealer: false, id: 114 },
    { name: '12', priority: 'Medium', current: false, dealer: false, id: 115 },
];

export const cards: ICard[] = [
    { value: 1, scoreType: 'asd', isEditable: true, id: 213 },
    { value: 2, scoreType: 'accsd', isEditable: true, id: 21 },
    { value: 3, scoreType: 'asxd', isEditable: true, id: 23 },
    { value: 5, scoreType: 'aswsd', isEditable: false, id: 13 },
];

export const message: IMessage[] = [
    { firstName: 'nick', lastName: 'kave', job: 'dev', id: 'f1', text: 'fsdfsdf' },
    { firstName: 'mike', lastName: 'bzhezinsky', job: 'design', id: 'f2', text: 'fsdfsdf' },
    { firstName: 'john', lastName: 'smith', job: 'batman', id: 'f3', text: 'fsdfsdf' },
];
