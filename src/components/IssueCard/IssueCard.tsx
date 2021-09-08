import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

const useStyles = makeStyles({
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
        background: 'rgba(96, 218, 191, 0.33)',
    },
});

type Props = {
    current?: boolean;
    name: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    dealer?: boolean;
    onDelete?: () => void;
};

const IssueCard: React.FC<Props> = (props: Props) => {
    const { name, current, priority, dealer, onDelete } = props;
    const classes = useStyles();

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
                {dealer && (
                    <CardActions className={classes.button}>
                        <Button onClick={onDelete}>
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
    dealer: false,
    onDelete: () => {},
};

export default IssueCard;
