import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import pokerPlanning from '../../assets/images/poker-planning.svg';
import ConnectForm from '../../components/ConnectForm';
import NewSession from '../../components/NewSession';

function MainPage(): JSX.Element {
    const [open, setOpen] = useState(false);

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
                        <NewSession setOpen={setOpen} />
                        <h3 className={styles.center}>OR:</h3>
                        <ConnectForm open={open} setOpen={setOpen} />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
