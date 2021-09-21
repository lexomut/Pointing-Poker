import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Game } from '../game';
import { NotFound } from '../notFound';

export const Invitation: React.FC = () => {
    const { path } = useRouteMatch();
    const isAuthorized = true; // DEMO => TODO replace with selector from REDUX
    const isDealer = true;

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
                {isAuthorized ? <Game isDealer={true} /> : <Redirect to="/" />}
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};
