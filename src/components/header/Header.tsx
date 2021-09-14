import React from 'react';
import { AppBar, Fab, makeStyles, Toolbar } from '@material-ui/core';
import pokerIcon from './assets/transparent_dark_icon.png';

const useStyles = makeStyles({
    img: {
        width: 50,
        height: 50,
    },
    fab: {
        position: 'relative',
        left: '50%',
        top: 30,
        background: '#a7ffeb',
    },
    header: {
        marginBottom: 30,
    },
});

export const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar color="primary" position="static" className={classes.header}>
            <Toolbar>
                <Fab className={classes.fab}>
                    <img className={classes.img} src={pokerIcon} alt="pointing poker" />
                </Fab>
            </Toolbar>
        </AppBar>
    );
};
