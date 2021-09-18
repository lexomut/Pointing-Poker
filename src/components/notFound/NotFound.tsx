import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 50,
    },
    link: {
        textDecoration: 'none',
    },
});

export const NotFound: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>
                4<ErrorOutlineIcon />4
            </h1>
            <h2>PAGE NOT FOUND</h2>
            <Link className={classes.link} to="/">
                Main page
            </Link>
        </div>
    );
};
