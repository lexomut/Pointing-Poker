import { Avatar, Button, Switch } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UploadButton from '../UploadButton';
import styles from './RegistrationForm.module.css';
import { IFormData } from '../../types';
import createUser from '../../serverConnect/server';

interface IRegistrationForm {
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({ setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [observer, setObserver] = useState(false);
    const [data, setData] = useState<IFormData>();
    const [image, setImage] = useState<File>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName.trim() !== '') {
            setData({ firstName, lastName, job, observer, image });
        }
    };
    useEffect(() => {
        if (image) console.log(URL.createObjectURL(image));
        if (data) createUser(data);
    }, [data, image]);

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Connect to lobby</h2>
                    <p>
                        Connect as <br /> Observer
                    </p>
                    <Switch value={observer} onChange={() => setObserver(!observer)} />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="firstName">
                        Your first name:
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            id="firstName"
                            type="text"
                            name="firstName"
                        />
                    </label>
                    <label htmlFor="lastName">
                        Your last name:
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            id="lastName"
                        />
                    </label>
                    <label htmlFor="job">
                        Your job position:
                        <input value={job} onChange={(e) => setJob(e.target.value)} id="job" />
                    </label>
                    <div className={styles.upload}>
                        <p>Image:</p>
                        <div className={styles.upload__buttons}>
                            <UploadButton setImage={setImage} />
                            <Button className={styles.btn} type="button" variant="outlined">
                                Button
                            </Button>
                        </div>
                        <Avatar src={image ? URL.createObjectURL(image) : '/broken-image.jpg'}>
                            {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
                        </Avatar>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button className={styles.btn} type="submit" variant="outlined">
                    Confirm
                </Button>
                <Button className={styles.btn} variant="outlined" onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default RegistrationForm;
