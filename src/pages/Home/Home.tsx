import React from 'react';
import { AppClient } from '../../api';
import * as AuthActions from '../../store/actions/auth';
import { useActions } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const authActions = useActions(AuthActions);
	const history = useHistory();

	const getUsers = async () => {
		const users = await AppClient.GetUsers();

		if (users) {
			authActions.setAuth(users);
			history.push('/users');
		}
	};

	return (
		<div>
			<button onClick={() => getUsers()}>Get users</button>
		</div>
	);
};

export default Home;
