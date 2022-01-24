import { get } from './http.service';
import { Post } from './models/Post.model';

export const getAllPosts = async (): Promise<Post[]> => {
	let posts: Post[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/posts');
		posts = response;
	} catch (e) {
		throw e;
	}

	return posts;
};

export const getPostsByUserId = async (userId: number | string): Promise<Post[]> => {
	let posts: Post[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
		posts = response;
	} catch (e) {
		throw e;
	}

	return posts;
};
