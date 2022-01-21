import { get } from './http.service';
import { User } from './models/User.model';

const getUsers = async (): Promise<User> => {
	let user: User;
	try {
		const response: any = await get('https://jsonplaceholder.typicode.com/users');
		user = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}
	return user;
};

export default getUsers;
