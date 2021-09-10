import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button/Button';
import Popover from '@material-ui/core/Popover';
import styles from './MainPage.module.css';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import pokerPlanning from '../../assets/images/poker-planning.svg';
import { connectGame, createGame } from '../../api/server';
// import { connectGame } from '../../api/server';

function MainPage(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    const [urlError, setUrlError] = useState(false);

    const handleConnect = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConnect = await connectGame(url);
        if (isConnect) {
            setOpen(true);
        } else {
            setUrlError(true);
            setTimeout(() => {
                setUrlError(false);
            }, 2000);
        }
    };

    const startGame = () => {
        setOpen(true);
        createGame();
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPop = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                            <button type="button" onClick={startGame}>
                                start new game
                            </button>
                        </div>
                        <h3 className={styles.center}>OR:</h3>
                        <form onSubmit={handleConnect} className={styles.connect}>
                            <p>
                                Connect to lobby by <span className={styles.highlight}>URL</span>:
                            </p>
                            <div className={styles.connect__control}>
                                <input
                                    required
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    type="text"
                                    id="connect"
                                />
                                <Button
                                    aria-describedby={id}
                                    color="primary"
                                    variant="outlined"
                                    type="submit"
                                    onClick={handleClick}
                                >
                                    Connect
                                </Button>
                                {urlError && (
                                    <Popover
                                        id={id}
                                        open={openPop}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <p className={styles.error}>invalid url!</p>
                                    </Popover>
                                )}
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <RegistrationForm setOpen={setOpen} />
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
