import React from 'react'
import { Redirect, Route, RouteProps, SwitchProps } from 'react-router'
import { Switch } from 'react-router'
import  RouterConfig  from '../routers/router.js'

function RenderRoute(RouterConfig) {
    if (!RouterConfig || RouterConfig.length === 0) {
        return null
    }

    return (
        <Switch>   
            {RouterConfig.map((route, index) => {
                const {
                    path,
                    key,
                    redirect,
                    exact,
                    strict,
                    routes: childRoutesConfig,
                    component: Comp,
                } = route

                if (redirect) {
                    return (
                        <Redirect
                            key={key || path || index}
                            from={path}
                            to={redirect}
                            exact={exact}
                            strict={strict}
                        />
                    )
                }

                return (
                    <Route
                        key={key || path || index}
                        path={path}
                        exact={exact}
                        strict={strict}
                        render={(props) => {
                            const childRoutes = RenderRoute(
                                childRoutesConfig || [],
                                {},
                                { location: props.location }
                            )

                            if (Comp) {
                                return (
                                    <Comp route={route}>
                                        {childRoutes}
                                    </Comp>
                                )
                            }

                            return childRoutes
                        }}
                    />
                )
            })}
        </Switch>
    )
}

export { RenderRoute }