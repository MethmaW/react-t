import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { Loader } from './components';
import { history } from './store/ConfigureStore';
import { AppRouter } from './router/AppRouter';
import './App.css';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Router history={history}>
				<div>
					<AppRouter />
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
