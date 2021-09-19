import React from 'react';
import { users } from '../../data';
import { UserCard } from '../UserCard';

interface IMemberField {
    classNames: string;
}

const MembersField: React.FC<IMemberField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {users.map(({ name, position, kickID, initials, currentUser, id }) => {
                return (
                    <UserCard
                        initials={initials}
                        name={name}
                        position={position}
                        kickID={kickID}
                        currentUser={currentUser}
                        key={id}
                    />
                );
            })}
        </div>
    );
};

export default MembersField;
