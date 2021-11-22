import { History } from "history";
import { combineReducers } from "redux";
import { Auth } from "../model";
import * as authReducer from "./auth"

export interface RootState {
	auth: Auth
}

const reducerConfig = (history: History) =>
	combineReducers({
		...authReducer
	});

export default reducerConfig;
