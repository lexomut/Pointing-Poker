import React from 'react';
import styles from './MemberCard.module.css';
import { IMember } from '../../types';

const MemberCard: React.FC<IMember> = ({
    firstName = 'Vova',
    lastName = 'Lukin',
    job = 'ppp',
    id = '',
}) => {
    return (
        <div className={styles.memberCard} key={id}>
            {`${firstName} ${lastName} ${job}`}
        </div>
    );
};

export default MemberCard;
