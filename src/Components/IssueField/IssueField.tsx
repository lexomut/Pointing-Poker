import React, { useContext } from 'react';
import { IssueCard } from '../IssueCard';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

interface IIssueField {
    classNames: string;
}

const IssueField: React.FC<IIssueField> = ({ classNames }) => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const { issues } = globalState.game;
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
