import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { IssueCard } from './components/IssueCard';

const App: React.FC = () => {
    return (
        <div>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <IssueCard
                name="Issue 234"
                priority="High"
                current
                dealer
                onDelete={() => {
                    alert('DELETED');
                }}
            />
            <IssueCard name="Issue 235" priority="Low" />
        </div>
    );
};

export default App;
