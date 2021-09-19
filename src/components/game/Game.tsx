import React from 'react';
import { Typography, Grid, Theme, createStyles, makeStyles, Button } from '@material-ui/core';
import { UserCard } from '../UserCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            height: '100%',
            color: theme.palette.primary.dark,
        },
        leftContainer: {
            borderRight: `2px solid ${theme.palette.primary.dark}`,
        },
        column: {
            flexDirection: 'column',
        },
    }),
);

export const Game: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item container justifyContent="center" xs={8} className={classes.leftContainer}>
                <Typography variant="h6">Name of the game/session</Typography>
                <Grid item container>
                    <UserCard
                        kickID={4}
                        size="large"
                        position="senior"
                        name="Lilly"
                        initials="LW"
                    />
                </Grid>
            </Grid>
            <Grid item container justifyContent="space-around" xs={4}>
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="space-around"
                    className={classes.column}
                    xs={6}
                >
                    <Grid item>
                        <Typography variant="subtitle1">Score:</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => alert('Put logic here')}
                        >
                            In progress
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => alert('Put logic here')}
                        >
                            In progress
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => alert('Put logic here')}
                        >
                            In progress
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => alert('Put logic here')}
                        >
                            In progress
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="space-around"
                    className={classes.column}
                    xs={6}
                >
                    <Grid item>
                        <Typography variant="subtitle1">Players:</Typography>
                    </Grid>
                    <Grid item>
                        <UserCard
                            name="Mark"
                            position="junior"
                            initials="MZ"
                            kickID={1}
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                        <UserCard
                            name="Linda"
                            position="middle"
                            initials="LA"
                            kickID={2}
                            size="small"
                        />
                    </Grid>
                    <Grid item>
                        <UserCard
                            size="small"
                            name="Barsik"
                            position="senior"
                            initials="BB"
                            kickID={2}
                            currentUser
                        />
                    </Grid>
                    <Grid item>
                        <UserCard
                            size="small"
                            name="Kus"
                            position="PAMAGITE"
                            initials="KK"
                            kickID={5}
                            currentUser
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
