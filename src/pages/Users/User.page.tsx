import { CircularProgress } from '@material-ui/core';
import * as React from 'react';
import Table from '../../components/Organisms/Table/Table';
import { Context } from '../../contexts/globalContext';
import useFetchData from '../../hooks/useFetchData';
import { Post } from '../../services/models/Post.model';
import { User } from '../../services/models/User.model';
import { getPostsByUserId } from '../../services/posts.service';
import { getAllUsers } from '../../services/users.service';

interface UserDataTable {
	email: string;
	name: string;
	posts: number;
}

const UserPage = () => {
	const { loading, setLoading } = React.useContext(Context);

	const headerTable = ['Name', 'Email', 'Number Posts'];

	const normalizeUserData = async (usersData: User[]): Promise<UserDataTable[]> => {
		const userDataTable: UserDataTable[] = [];
		try {
			for (const user of usersData) {
				const postsByUser: Post[] = await getPostsByUserId(user.id);
				userDataTable.push({
					name: user.name,
					email: user.email,
					posts: postsByUser.length,
				});
			}
		} catch (e) {
			throw e;
		}

		return userDataTable;
	};

	const usersDataTable = useFetchData({
		getterAll: getAllUsers,
		normalizeData: normalizeUserData,
		setLoading,
	});

	if (loading || !usersDataTable) {
		return <CircularProgress />;
	}

	return (
		<div>
			<Table headerRows={headerTable} rows={usersDataTable} />
		</div>
	);
};

export default UserPage;
