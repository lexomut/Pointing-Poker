import React from 'react';
import { cards } from '../../data';
import { GameCard } from '../GameCards';

interface IIssueField {
    classNames: string;
}

const CardField: React.FC<IIssueField> = ({ classNames }) => {
    return (
        <div className={classNames}>
            {cards.map(({ value, scoreType, isEditable, id }) => {
                return (
                    <GameCard
                        value={value}
                        scoreType={scoreType}
                        isEditable={isEditable}
                        key={id}
                    />
                );
            })}
        </div>
    );
};

export default CardField;
