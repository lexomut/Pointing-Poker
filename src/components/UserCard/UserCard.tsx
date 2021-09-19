import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme, Avatar, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import BlockIcon from '@material-ui/icons/Block';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: (props: Props) => {
            if (props.size === 'large') {
                return {
                    // minWidth: 250,
                    width: 250,
                    height: 60,
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    marginBottom: 10,
                };
            }
            return {
                // minWidth: 200,
                width: 120,
                height: 50,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                marginBottom: 0,
            };
        },
        cardContainer: {
            width: '100%',
            padding: 0,
        },
        title: (props: Props) => {
            if (props.size === 'large') {
                return {
                    lineHeight: 1,
                };
            }
            return {
                lineHeight: 0.5,
                fontSize: '14px',
            };
        },
        caption: (props: Props) => {
            if (props.size === 'large') {
                return {
                    fontSize: '0.6rem',
                };
            }
            return {
                fontSize: '0.3rem',
            };
        },
        avatar: {
            background: '#60DABF',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontWeight: 'bold',
        },
        currentUser: {
            paddingTop: 10,
            background: theme.palette.secondary.main,
        },
    }),
);

type Props = {
    currentUser?: boolean;
    name: string;
    position: string;
    initials: string;
    imgSrc?: string;
    kickID: number;
    size: 'large' | 'small';
};

export const UserCard: React.FC<Props> = (props: Props) => {
    const { name, currentUser, position, initials, imgSrc, kickID, size } = props;
    const classes = useStyles(props);
    console.log(size);
    const clickHandler = (id: number) => {
        return alert(`kick off ${id}`);
    };
    return (
        <Card
            className={clsx(classes.root, { [classes.currentUser]: currentUser })}
            variant="outlined"
        >
            <CardContent className={classes.cardContainer}>
                <Grid
                    container
                    alignItems="center"
                    alignContent="center"
                    justifyContent="space-around"
                >
                    <Grid item xs={2}>
                        {' '}
                        {imgSrc ? (
                            <Avatar className={classes.avatar} src={imgSrc} alt={name} />
                        ) : (
                            <Avatar className={classes.avatar}>{initials}</Avatar>
                        )}
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6" className={classes.title}>
                            {name}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            variant="caption"
                            className={classes.caption}
                        >
                            {position}
                        </Typography>
                    </Grid>
                    <Grid item container xs={3}>
                        {!currentUser && (
                            <CardActions>
                                <Button onClick={() => clickHandler(kickID)}>
                                    <BlockIcon />
                                </Button>
                            </CardActions>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

UserCard.defaultProps = {
    currentUser: false,
    imgSrc: undefined,
};
