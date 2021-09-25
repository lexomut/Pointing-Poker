import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 276,
            height: 47,
            '& > *': {
                margin: theme.spacing(0),
            },
        },
        input: {
            display: 'none',
        },
    }),
);

interface IUploadButton {
    setImage: (value: React.SetStateAction<File | undefined>) => void;
}

const UploadButton: React.FC<IUploadButton> = ({ setImage }) => {
    const classes = useStyles();

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className={classes.root}>
            <label htmlFor="contained-button-file">
                <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    className={classes.input}
                    onChange={(e) => imageHandler(e)}
                />
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
        </div>
    );
};

export default UploadButton;
