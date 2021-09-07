import React from 'react';
// import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import styles from './MainPage.module.css';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import pokerPlanning from '../../assets/images/poker-planning.svg';

function MainPage(): JSX.Element {
    const [open, setOpen] = React.useState(false);

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
                            <button type="button" onClick={() => setOpen(true)}>
                                start new game
                            </button>
                        </div>
                        <h3 className={styles.center}>OR:</h3>
                        <form className={styles.connect}>
                            <p>
                                Connect to lobby by <span className={styles.highlight}>URL</span>:
                            </p>
                            <div className={styles.connect__control}>
                                <input type="text" id="connect" />
                                <Button color="primary" variant="outlined" type="submit">
                                    Connect
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <RegistrationForm />
                                </Modal>
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
