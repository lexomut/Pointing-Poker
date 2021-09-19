import React from 'react';
import { issues } from '../../data';
import { IssueCard } from '../IssueCard';

interface IIssueField {
    classNames: string;
}

const IssueField: React.FC<IIssueField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {issues.map(({ name, priority, current, dealer, id }) => {
                return (
                    <IssueCard
                        key={id}
                        name={name}
                        priority={priority}
                        current={current}
                        dealer={dealer}
                    />
                );
            })}
        </div>
    );
};

export default IssueField;
