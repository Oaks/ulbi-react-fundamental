import React, {useContext} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthContext} from "../context";
import {publicRoutes, privateRoutes} from '../router';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to="posts" />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to="login" />
            </Switch>
    )
}

export default AppRouter;

