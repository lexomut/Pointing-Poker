import React from 'react';
import { AppBar, Fab, makeStyles, Toolbar } from '@material-ui/core';
import pokerIcon from './assets/transparent_dark_icon.png';

const useStyles = makeStyles({
    img: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 3,
        right: '7%',
    },
    fab: {
        position: 'absolute',
        top: 30,
        right: '50%',
        background: '#a7ffeb',
    },
});

export const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Fab className={classes.fab}>
                    <img className={classes.img} src={pokerIcon} alt="pointing poker" />
                </Fab>
            </Toolbar>
        </AppBar>
    );
};
