import React from 'react';
import './MainPage.css';
import pokerPlanning from '../assets/images/poker-planning.svg';

function MainPage(): JSX.Element {
    return (
        <div className="main-page">
            <header className="header">header</header>
            <main>
                <div className="container">
                    <img className="poker-planning" src={pokerPlanning} alt="poker-planning" />
                    <section className="content">
                        <h3 className="start">Start your planning:</h3>
                        <div className="new-session light-text">
                            <p>Create session:</p>
                            <button type="button">start new game</button>
                        </div>
                        <h3 className="center">OR:</h3>
                        <form className="connect">
                            <p>
                                Connect to lobby by <span>URL</span>:
                            </p>
                            <div className="connect__control">
                                <input type="text" id="connect" />
                                <button type="submit">Connect</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
            <footer className="footer">footer</footer>
        </div>
    );
}

export default MainPage;
