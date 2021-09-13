import React from 'react';
import { CardBack } from './CardBack';

export const DemoGameCards: React.FC = () => {
    return (
        <div>
            DEMO CARD BACK
            <CardBack back="bgMountains" />
            <CardBack back="bgMoon" />
            <CardBack back="bgEagle" />
            <CardBack back="bgLeaf" />
        </div>
    );
};
