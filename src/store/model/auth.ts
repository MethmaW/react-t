export interface Auth {
	userData: any[];
}
export enum AuthActions {
	SET_USER_DATA = "SET_USER_DATA",
}

interface AuthActionType<T> {
	type: T;
	payload: any
}

export type AuthAction = AuthActionType<typeof AuthActions.SET_USER_DATA>;