import { createBrowserHistory } from 'history';
import * as localforage from 'localforage';
import { applyMiddleware, createStore } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage: localforage,
	blacklist: []
};

const history = createBrowserHistory();

let middleware = applyMiddleware(thunk);

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const storeConfig = () => {
	const store = createStore(persistedReducer, {}, middleware);
	const persistor = persistStore(store);
	return { store, persistor };
};

export { history };

export default storeConfig;
