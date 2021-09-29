import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pokerPlanning from '../../assets/images/poker-planning.svg';
import { ConnectForm, NewSession } from '../../components';
import styles from './MainPage.module.scss';

export function MainPage(): JSX.Element {
    const { id }: { id: string | undefined } = useParams();
    const [open, setOpen] = useState(false);
    const [isDealer, setIsDealer] = useState(false);

    return (
        <main className={styles.main_page}>
            <div className={styles.container}>
                <img className={styles.poker_planning} src={pokerPlanning} alt="poker-planning" />
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
    );
}
