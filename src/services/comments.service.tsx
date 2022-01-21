import { get } from './http.service';
import { Comment } from './models/Comment.model';

const getAllComments = async (): Promise<Comment[]> => {
	let comments: Comment[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/comments');
		comments = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}

	return comments;
};

const getCommentsByPostId = async (postId: number | string): Promise<Comment[]> => {
	let comments: Comment[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
		comments = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}

	return comments;
};

export default { getAllComments, getCommentsByPostId };
