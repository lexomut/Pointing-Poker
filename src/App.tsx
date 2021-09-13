import React from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Button } from '@material-ui/core';
import { IssueButton } from './components/buttons';
import { Switch } from './components/switch';
import { Header, Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Button color="primary" variant="contained" onClick={() => alert('Put logic here')}>
                start game
            </Button>
            <Button color="primary" variant="outlined" onClick={() => alert('Put logic here')}>
                cancel game
            </Button>
            <IssueButton />
            <ThreeDRotation />
            <Switch label="Scrum master as player:" />
            <Footer />
        </div>
    );
};

export default App;
