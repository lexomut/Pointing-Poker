import React, { useState } from 'react';
import { AppBar, Fab, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import pokerIcon from './assets/transparent_dark_icon.png';

const useStyles = makeStyles({
    img: {
        width: 50,
        height: 50,
    },
    fab: {
        position: 'relative',
        right: '50%',
        top: 30,
        background: '#a7ffeb',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

export const Header: React.FC = () => {
    const classes = useStyles();
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <AppBar color="primary" position="static">
            <Toolbar className={classes.header}>
                <Fab className={classes.fab}>
                    <img className={classes.img} src={pokerIcon} alt="pointing poker" />
                </Fab>
                {!isChatOpen ? (
                    <IconButton
                        color="secondary"
                        onClick={() => {
                            setIsChatOpen(true);
                        }}
                    >
                        <SpeakerNotesIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        color="secondary"
                        onClick={() => {
                            setIsChatOpen(false);
                        }}
                    >
                        <SpeakerNotesOffIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};
