import React from 'react';
import { cards } from '../../data';
import GameCard from '../GameCard/GameCard';

interface IIssueField {
    classNames: string;
}

const CardField: React.FC<IIssueField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {cards.map(({ rating, id }) => {
                return <GameCard rating={rating} key={id} />;
            })}
        </div>
    );
};

export default CardField;
