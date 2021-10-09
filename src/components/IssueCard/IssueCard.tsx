import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { Issue } from '../../types/game';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 250,
            width: 250,
            height: 60,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 10,
        },
        cardContainer: {
            position: 'relative',
            padding: 0,
            paddingLeft: 5,
        },
        button: {
            position: 'absolute',
            top: 5,
            right: 0,
        },
        title: {
            lineHeight: 1,
        },
        caption: {
            fontSize: '0.6rem',
        },
        current: {
            background: theme.palette.secondary.main,
        },
    }),
);

type Props = {
    current?: boolean;
    name: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    showDeleteButton?: boolean;
    id: string;
};

export const IssueCard: React.FC<Props> = (props: Props) => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const { name, current, priority, showDeleteButton, id } = props;
    const classes = useStyles();
    const handlerClick = () => {
        const newIssues = globalState.game.issues.filter((issue: Issue) => id !== issue.id);
        globalState.ws.provider?.changeValueOfGameProperty('issues', newIssues);
    };

    return (
        <Card className={clsx(classes.root, { [classes.current]: current })} variant="outlined">
            <CardContent className={classes.cardContainer}>
                <Typography className={classes.caption} variant="caption" color="textSecondary">
                    {current ? 'CURRENT' : ' '}
                </Typography>

                <Typography variant="h6" className={classes.title}>
                    {name}
                </Typography>
                <Typography color="textSecondary" variant="caption" className={classes.caption}>
                    {priority} priority
                </Typography>
                {showDeleteButton && !current && (
                    <CardActions className={classes.button}>
                        <Button disabled={!globalState.ws.status} onClick={handlerClick}>
                            <CloseIcon />
                        </Button>
                    </CardActions>
                )}
            </CardContent>
        </Card>
    );
};

IssueCard.defaultProps = {
    current: false,
    showDeleteButton: false,
};
