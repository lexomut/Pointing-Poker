import React from 'react';
import { users } from '../../data';
import { UserCard } from '../UserCard';

interface IMemberField {
    classNames: string;
}

const MembersField: React.FC<IMemberField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {users.map(({ name, jobPosition, UserID, initials, currentUser }) => {
                return (
                    <UserCard
                        initials={initials}
                        name={name}
                        jobPosition={jobPosition}
                        UserID={UserID}
                        currentUser={currentUser}
                        key={UserID}
                    />
                );
            })}
        </div>
    );
};

export default MembersField;
