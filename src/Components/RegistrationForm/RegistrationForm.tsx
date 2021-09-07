import { Avatar, Button, Switch } from '@material-ui/core';
import React from 'react';
import UploadButton from '../UploadButton';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
    return (
        <form className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Connect to lobby</h2>
                    <p>
                        Connect as <br /> Observer
                    </p>
                    <Switch />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="first-name">
                        Your first name:
                        <input id="first-name" />
                    </label>
                    <label htmlFor="last-name">
                        Your last name:
                        <input id="last-name" />
                    </label>
                    <label htmlFor="job">
                        Your job position:
                        <input id="job" />
                    </label>
                    <div className={styles.upload}>
                        <p>Image:</p>
                        <div className={styles.upload__buttons}>
                            <UploadButton />
                            <Button className={styles.btn} type="button" variant="outlined">
                                Button
                            </Button>
                        </div>
                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button className={styles.btn} type="submit" variant="outlined">
                    Confirm
                </Button>
                <Button className={styles.btn} variant="outlined">
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default RegistrationForm;
