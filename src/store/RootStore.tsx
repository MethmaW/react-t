import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../App';
import ConfigureStore from './ConfigureStore';
import { Loader } from '../components';

const { persistor, store } = ConfigureStore();

export function RootStore() {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
}
