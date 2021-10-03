import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { Button, Link, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { Issue } from '../../types/game';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 250,
            width: 250,
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
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        link: {
            wordWrap: 'break-word',
        },
        score: {
            marginTop: 10,
        },
    }),
);

type Props = {
    current?: boolean;
    name: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    dealer?: boolean;
    id: string;
    score: string;
    link: string | undefined;
};

export const IssueCardExpandable: React.FC<Props> = (props: Props) => {
    const { name, current, priority, dealer, id, link, score } = props;
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
    const [newScore, setNewScore] = useState(score);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);

    const handlerClick = () => {
        const newIssues = globalState.game.issues.filter((issue: Issue) => id !== issue.id);
        globalState.ws.provider?.changeValueOfGameProperty('issues', newIssues);
    };

    const handleScoreSave = () => {
        if (dealer) globalState.ws.provider?.changeValueOfIssueProperty('score', id, newScore);
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
                <CardActions className={classes.button} disableSpacing>
                    {dealer && !current && (
                        <Button disabled={!globalState.ws.status} onClick={handlerClick}>
                            <CloseIcon />
                        </Button>
                    )}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="subtitle1">Link:</Typography>
                    <Link href={link} target="_blank" className={classes.link}>
                        {link}
                    </Link>
                    <TextField
                        className={classes.score}
                        id="outlined-read-only-input"
                        label="Score:"
                        value={newScore}
                        onChange={(event) => setNewScore(event.target.value || '')}
                        InputProps={{
                            readOnly: !dealer,
                            endAdornment: (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={handleScoreSave}
                                    endIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                            ),
                        }}
                    />
                </CardContent>
            </Collapse>
        </Card>
    );
};

IssueCardExpandable.defaultProps = {
    current: false,
    dealer: false,
};
