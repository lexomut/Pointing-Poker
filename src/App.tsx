import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import styles from './App.module.css';
import Lobby from './pages/Lobby/Lobby';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.container}>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/lobby" component={Lobby} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
