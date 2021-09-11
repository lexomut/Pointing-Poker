import React, { useState } from 'react';
import styles from './MainPage.module.css';
import pokerPlanning from '../../assets/images/poker-planning.svg';
import ConnectForm from '../../Components/ConnectForm/ConnectForm';
import { createGame } from '../../api/server';

function MainPage(): JSX.Element {
    const [open, setOpen] = useState(false);

    const startGame = () => {
        setOpen(true);
        createGame();
    };

    return (
        <div className={styles.main_page}>
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
                            <button type="button" onClick={startGame}>
                                start new game
                            </button>
                        </div>
                        <h3 className={styles.center}>OR:</h3>
                        <ConnectForm open={open} setOpen={setOpen} />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
