import React, { useContext } from 'react';
import { IssueCard } from '../IssueCard';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { IssueButton } from '../buttons/IssueButton';

interface IIssueField {
    classNames: string;
}

export const IssueField: React.FC<IIssueField> = ({ classNames }) => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const { issues } = globalState.game;
    return (
        <div className={classNames}>
            {issues.map(({ name, priority, id }) => {
                return (
                    <IssueCard
                        key={id}
                        name={name}
                        priority={priority}
                        showDeleteButton={globalState.currentUser.roleInGame === 'dealer'}
                        id={id}
                    />
                );
            })}
            {globalState.currentUser.roleInGame === 'dealer' && <IssueButton />}
        </div>
    );
};
