import React, { Dispatch, useContext } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Card } from '@material-ui/core';
import { Game } from '../game';
import { NotFound } from '../notFound';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { MainPage } from '../../pages/MainPage';
import { Lobby } from '../../pages/Lobby';

import styles from './invitation.module.scss';

export const Invitation: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { path } = useRouteMatch();
    const isAuthorized = true;
    const openModal = globalState.game.kickedUsersID.some(
        (item: string) => item === globalState.currentUser.userID,
    );

    return (
        <>
            {' '}
            <Switch>
                <Route exact path={`${path}`}>
                    <MainPage />
                </Route>
                <Route exact path={`${path}/lobby`}>
                    {isAuthorized ? (
                        <Lobby />
                    ) : (
                        <Redirect to={`${path}/${globalState.game.gameID}`} />
                    )}
                </Route>

                <Route exact path={`${path}/game`}>
                    {isAuthorized ? <Game /> : <Redirect to="/" />}
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
            <Modal
                open={openModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Card className={styles.modal}>
                    <h4>YOU KICKED</h4>
                </Card>
            </Modal>
        </>
    );
};
