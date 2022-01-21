import { get } from './http.service';
import { User } from './models/User.model';

const getAllUsers = async (): Promise<User[]> => {
	let users: User[];
	try {
		const response: any = await get('https://jsonplaceholder.typicode.com/users');
		users = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}
	return users;
};

const getUserById = async (userId: number | string): Promise<User> => {
	let user: User;
	try {
		const response: any = await get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		user = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}
	return user;
};

export default { getAllUsers, getUserById };
