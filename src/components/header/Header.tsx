import React, { useState } from 'react';
import {
    AppBar,
    createStyles,
    Fab,
    IconButton,
    makeStyles,
    Theme,
    Toolbar,
} from '@material-ui/core';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import pokerIcon from './assets/transparent_dark_icon.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            width: 50,
            height: 50,
        },
        fab: {
            position: 'relative',
            right: '40%',
            top: 30,
            background: theme.palette.secondary.main,
        },
        header: {
            marginBottom: 30,
        },
        header_bar: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    }),
);

export const Header: React.FC = () => {
    const classes = useStyles();
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <AppBar className={classes.header} color="primary" position="static">
            <Toolbar className={classes.header_bar}>
                <Fab className={classes.fab}>
                    <img className={classes.img} src={pokerIcon} alt="pointing poker" />
                </Fab>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        setIsChatOpen(!isChatOpen);
                    }}
                >
                    {!isChatOpen ? <SpeakerNotesIcon /> : <SpeakerNotesOffIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
