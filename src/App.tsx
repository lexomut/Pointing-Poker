import React from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Button, createTheme, MuiThemeProvider } from '@material-ui/core';
import { IssueCard } from './components/IssueCard';
import { IssueButton } from './components/buttons';
import { Switch } from './components/switch';
import { Header, Footer, DemoUserCards } from './components';
import styles from './style.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            light: '#428e92',
            main: '#006064',
            dark: '#00363a',
        },
        secondary: {
            light: '#dbffff',
            main: '#a7ffeb',
            dark: '#75ccb9',
        },
    },
});

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
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
                <DemoUserCards />
                <IssueCard name="Issue 234" priority="High" dealer />
                <IssueCard current name="Issue 235" priority="Low" />
                <Switch label="Scrum master as player:" />
                <Footer />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
