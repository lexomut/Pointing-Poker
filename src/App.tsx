import React from 'react';
import { Button } from '@material-ui/core';
import { DemoGameCards, Footer, Header, DemoUserCards } from './components';
import { IssueCard } from './components/IssueCard';
import { IssueButton } from './components/buttons';
import { Switch } from './components/switch';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <Button color="primary" variant="contained" onClick={() => alert('Put logic here')}>
                    start game
                </Button>
                <Button color="primary" variant="outlined" onClick={() => alert('Put logic here')}>
                    cancel game
                </Button>
                <IssueButton />
                <DemoGameCards />
                <DemoUserCards />
                <IssueCard name="Issue 234" priority="High" dealer />
                <IssueCard current name="Issue 235" priority="Low" />
                <Switch label="Scrum master as player:" />
            </main>
            <Footer />
        </>
    );
};

export default App;
