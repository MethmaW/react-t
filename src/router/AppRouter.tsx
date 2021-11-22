import React from 'react';
import { Route, Switch } from 'react-router-dom';
import publicPaths from './public-paths';
import privatePaths from './private-paths';
import WithAuth from './WithAuth';
import NotFound from '../pages/NotFound/NotFound';

export function AppRouter() {
	return (
		<div>
			<Switch>
				{publicPaths.map((route, i) => {
					return route.component && <Route key={i} path={route.path} exact={route.exact} component={route.component} />;
				})}

				{privatePaths.map((route, i) => {
					return <WithAuth key={i} path={route.path} exact={route.exact} component={route.component} isAuth={false} />;
				})}

				<Route path='*' exact={true} component={NotFound} />
			</Switch>
		</div>
	);
}
