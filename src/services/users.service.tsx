import { get } from './http.service';
import { User } from './models/User.model';

export const getAllUsers = async (): Promise<User[]> => {
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

export const getUserById = async (userId: number | string): Promise<User> => {
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
