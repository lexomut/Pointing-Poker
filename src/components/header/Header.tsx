import React, { Dispatch, useContext } from 'react';
import { useLocation } from 'react-router-dom';
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
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SHOW_CHAT } from '../../state/ActionTypesConstants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            width: 50,
            height: 50,
        },
        fab: {
            position: 'relative',
            right: '50%',
            top: 30,
            background: theme.palette.secondary.light,
        },
        header: {
            marginBottom: 30,
        },
        header_bar: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        chatIcon: {
            marginLeft: '-5%',
        },
    }),
);

export const Header: React.FC = () => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const classes = useStyles();
    const location = useLocation();
    return (
        <AppBar className={classes.header} color="primary" position="static">
            <Toolbar className={classes.header_bar}>
                <Fab className={classes.fab}>
                    <img className={classes.img} src={pokerIcon} alt="pointing poker" />
                </Fab>
                {location.pathname !== '/' && (
                    <IconButton
                        className={classes.chatIcon}
                        color="secondary"
                        onClick={() => {
                            dispatch({ type: SHOW_CHAT, payLoad: undefined });
                        }}
                    >
                        {!globalState.chatOpen ? <SpeakerNotesIcon /> : <SpeakerNotesOffIcon />}
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};
