import React, { Dispatch, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';
import styles from './gameCard.module.scss';
import { ITEM_HEIGHT } from './constants';
import { Action, GlobalState, PopupType } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_GAME_TEMP_SETTINGS, SET_POPUP } from '../../state/ActionTypesConstants';
import { Card } from '../../types/game';
import { CardEditForm } from '../CardAddForm/CardEditForm';

type Props = {
    id: string;
};
export const CardMenu: React.FC<Props> = (props: Props): JSX.Element => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { id } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleEdit = () => {
        dispatch({ type: SET_POPUP, payLoad: 'editCard' as PopupType });
        setAnchorEl(null);
    };
    const handleDelete = () => {
        const newCards = globalState.temporaryDialerSettings.cards.filter((card) => card.id !== id);
        dispatch({
            type: SET_GAME_TEMP_SETTINGS,
            payLoad: {
                property: 'cards',
                value: newCards as Card[],
            },
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={styles.menuBtn}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            <Modal
                open={globalState.popup === 'editCard'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <CardEditForm id={id as string} />
                </div>
            </Modal>
        </>
    );
};
