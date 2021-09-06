import React from 'react';
import './MainPage.css';
// import classNames from 'classnames';
import pokerPlanning from '../assets/images/poker-planning.svg';
import styles from './MainPage.module.css';

function MainPage(): JSX.Element {
    return (
        <div className={styles.main_page}>
            <header className={styles.header}>header</header>
            <main>
                <div className={styles.container}>
                    <img
                        className={styles.poker_planning}
                        src={pokerPlanning}
                        alt="poker-planning"
                    />
                    <section className={styles.content}>
                        <h3 className={styles.start}>Start your planning:</h3>
                        <div className={styles.new_session}>
                            <p>Create session:</p>
                            <button type="button">start new game</button>
                        </div>
                        <h3 className={styles.center}>OR:</h3>
                        <form className={styles.connect}>
                            <p>
                                Connect to lobby by <span className={styles.highlight}>URL</span>:
                            </p>
                            <div className={styles.connect__control}>
                                <input type="text" id="connect" />
                                <button type="submit">Connect</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
            <footer className={styles.footer}>footer</footer>
        </div>
    );
}

export default MainPage;
