import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MainPage.module.scss';
import pokerPlanning from '../../assets/images/poker-planning.svg';
import { ConnectForm } from '../../components/ConnectForm';
import { NewSession } from '../../components/NewSession';

export function MainPage(): JSX.Element {
    const { id }: { id: string | undefined } = useParams();
    const [open, setOpen] = useState(false);
    const [isDealer, setIsDealer] = useState(false);

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
                        <NewSession setIsDealer={setIsDealer} setOpen={setOpen} />
                        <h3 className={styles.center}>OR:</h3>
                        <ConnectForm
                            id={id}
                            open={open}
                            isDealer={isDealer}
                            setIsDealer={setIsDealer}
                            setOpen={setOpen}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}
