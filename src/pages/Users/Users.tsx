import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const Users = () => {
	const users: any = useSelector((state: RootState) => state.auth.userData);

	return (
		<div>
			{users &&
				users.map((user: any) => {
					return <div key={user.id}>{user.email}</div>;
				})}
		</div>
	);
};

export default Users;
