import createReducer from "./createReducer";
import { Auth, AuthAction, AuthActions } from "../model";

const initialState: Auth = {
	userData: [{}]
};

export const auth = createReducer<Auth>(initialState, {
	[AuthActions.SET_USER_DATA](state: Auth, action: AuthAction) {
		return {
			...state,
			userData: action.payload
		};
	},
});
