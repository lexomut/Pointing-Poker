import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { IssueCard } from './components/IssueCard';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
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
            <Footer />
        </div>
    );
};

export default App;
