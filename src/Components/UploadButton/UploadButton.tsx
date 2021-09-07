import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import styles from './UploadButton.module.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }),
);

export default function UploadButton() {
    const classes = useStyles();
    return (
        <div className={classNames(classes.root, styles.input)}>
            <label htmlFor="contained-button-file">
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    className={classes.input}
                />
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
        </div>
    );
}
