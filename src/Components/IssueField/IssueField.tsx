import React from 'react';
import { issues } from '../../data';
import IssueCard from './../IssueCard/IssueCard';

interface IIssueField {
    classNames: string;
}

const IssueField: React.FC<IIssueField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {issues.map(({ issueNumber, priority, id }) => {
                return <IssueCard issueNumber={issueNumber} priority={priority} key={id} />;
            })}
        </div>
    );
};

export default IssueField;
