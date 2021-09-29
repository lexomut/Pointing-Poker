import React, { Dispatch, useContext } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Game } from '../game';
import { NotFound } from '../notFound';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

export const Invitation: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { path } = useRouteMatch();
    const isAuthorized = globalState.game.gameID && true;
    const isDealer = globalState.currentUser.role === 'dealer';

    return (
        <Switch>
            <Route exact path={`${path}`}>
                Popup to connect
            </Route>
            <Route exact path={`${path}/lobby`}>
                {isAuthorized ? <h2>Lobby for all players</h2> : <Redirect to="/" />}
            </Route>
            <Route exact path={`${path}/settings`}>
                {isAuthorized && isDealer ? <h2>Lobby for dealer</h2> : <Redirect to="/" />}
            </Route>
            <Route exact path={`${path}/game`}>
                {isAuthorized ? <Game /> : <Redirect to="/" />}
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};
