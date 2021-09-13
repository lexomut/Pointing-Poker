import React from 'react';
import { IIssues } from '../../types';
import styles from './IssueCard.module.css';

const IssueCard: React.FC<IIssues> = ({ issueNumber, priority }) => {
    return <div className={styles.issueCard}>{`${issueNumber} ${priority}`}</div>;
};

export default IssueCard;
