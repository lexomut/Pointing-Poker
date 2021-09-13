import { ICard, IIssues, IMemberCard, IMessage } from './types';

export const members: IMemberCard[] = [
    { firstName: 'nick', lastName: 'kave', job: 'dev', id: 'asd' },
    { firstName: 'mike', lastName: 'bzhezinsky', job: 'design', id: 'asda' },
    { firstName: 'john', lastName: 'smith', job: 'batman', id: 'aaa' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: 'adaa' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: 'aaaaa' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: 'aaaaaaa' },
];

export const issues: IIssues[] = [
    { issueNumber: '445', priority: 'low', id: '55' },
    { issueNumber: '211', priority: 'low', id: '444' },
    { issueNumber: '44445', priority: 'low', id: '33' },
    { issueNumber: '44545', priority: 'low', id: '222' },
    { issueNumber: '12', priority: 'high', id: '144' },
];

export const cards: ICard[] = [
    { rating: '1', id: 'asd' },
    { rating: '2', id: 'accsd' },
    { rating: '3', id: 'asxd' },
    { rating: '5', id: 'aswsd' },
];

export const message: IMessage[] = [
    { firstName: 'nick', lastName: 'kave', job: 'dev', id: 'f1', text: 'fsdfsdf' },
    { firstName: 'mike', lastName: 'bzhezinsky', job: 'design', id: 'f2', text: 'fsdfsdf' },
    { firstName: 'john', lastName: 'smith', job: 'batman', id: 'f3', text: 'fsdfsdf' },
];
