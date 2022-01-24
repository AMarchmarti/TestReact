import { get } from './http.service';
import { Comment } from './models/Comment.model';

export const getAllComments = async (): Promise<Comment[]> => {
	let comments: Comment[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/comments');
		comments = response;
	} catch (e) {
		throw e;
	}

	return comments;
};

export const getCommentsByPostId = async (postId: number | string): Promise<Comment[]> => {
	let comments: Comment[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
		comments = response;
	} catch (e) {
		throw e;
	}

	return comments;
};
