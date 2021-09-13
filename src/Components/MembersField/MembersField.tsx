import React from 'react';
import { members } from '../../data';
import MemberCard from '../MemberCard';

interface IMemberField {
    classNames: string;
}

const MembersField: React.FC<IMemberField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {members.map(({ firstName, lastName, job, id }) => {
                return <MemberCard firstName={firstName} lastName={lastName} job={job} key={id} />;
            })}
        </div>
    );
};

export default MembersField;
