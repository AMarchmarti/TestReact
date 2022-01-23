import * as React from 'react';
import Table from '../../Organisms/Table/Table';
import { Context } from '../../../contexts/globalContext';
import useFetchData from '../../../hooks/useFetchData';
import { Post } from '../../../services/models/Post.model';
import { User } from '../../../services/models/User.model';
import { getPostsByUserId } from '../../../services/posts.service';
import { getAllUsers } from '../../../services/users.service';
import Loading from '../../Molecules/Loading/Loading';
import CacheFactory from '../../../services/core/cache/cache.factory';
import useCache from '../../../hooks/useCache';

interface UserDataTable {
	email: string;
	name: string;
	posts: number;
}

const UserPage = () => {
	const { loading, setLoading } = React.useContext(Context);
	const [cache, setCache] = useCache('users');
	const [usersData, setUsersData] = React.useState<UserDataTable[]>();

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

	const fetch = async () => {
		const users: User[] = await getAllUsers();
		setCache(await normalizeUserData(users));
		setUsersData(await normalizeUserData(users));
	};

	React.useEffect(() => {
		(async (): Promise<void> => {
			setLoading(true);
			if (cache) {
				setUsersData(cache);
			} else {
				await fetch();
			}
			setLoading(false);
		})();
	}, []);

	if (loading || !usersData) {
		return <Loading />;
	}

	return (
		<div>
			<Table headerRows={headerTable} rows={usersData} />
		</div>
	);
};

export default UserPage;
