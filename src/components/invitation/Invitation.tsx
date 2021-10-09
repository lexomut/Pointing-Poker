import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Card } from '@material-ui/core';
import { Game } from '../game';
import { NotFound } from '../notFound';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { MainPage } from '../../pages/MainPage';
import { Lobby } from '../../pages/Lobby';

import styles from './invitation.module.scss';
import { Result } from '../Result/Result';

export const Invitation: React.FC = (): JSX.Element => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const history = useHistory();
    const [isTimeout, setIsTimeout] = useState(false);
    const { path } = useRouteMatch();

    const openModal = globalState.game.kickedUsersID.some(
        (item: string) => item === globalState.currentUser.userID,
    );
    const isAuthorized = !openModal;
    if (openModal && !isTimeout) {
        setIsTimeout(true);
        setTimeout(() => history.push(`/`), 6000);
    }
    useEffect(() => {
        if (globalState.game.status === 'canceled') history.push(`/`);
    });

    return (
        <>
            <Switch>
                <Route exact path={path}>
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
                <Route exact path={`${path}/result`}>
                    <Result />
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
                <div>
                    <Card className={styles.modal}>
                        <h4>YOU WERE KICKED</h4>
                    </Card>
                </div>
            </Modal>
        </>
    );
};
