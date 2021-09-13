import React from 'react';
import styles from './MemberCard.module.css';
import { IMemberCard } from '../../types';

const MemberCard: React.FC<IMemberCard> = ({
    firstName = 'Vova',
    lastName = 'Lukin',
    job = 'ppp',
}) => {
    return <div className={styles.memberCard}>{`${firstName} ${lastName} ${job}`}</div>;
};

export default MemberCard;
