import * as React from 'react';
import { Context } from '../../../contexts/globalContext';
import { Post } from '../../../services/models/Post.model';
import { Comment } from '../../../services/models/Comment.model';
import { getAllPosts } from '../../../services/posts.service';
import { getCommentsByPostId } from '../../../services/comments.service';
import { User } from '../../../services/models/User.model';
import { getUserById } from '../../../services/users.service';
import { CircularProgress } from '@material-ui/core';
import Table from '../../Molecules/Table/Table';
import InputNumber from '../../Atoms/InputNumber/InputNumber';
import useFetchData from '../../../hooks/useFetchData';

interface PostData {
	body: string;
	title: string;
	comments: number;
	author: string;
}

const INITIALVALUE = 5;

const PostsPage = () => {
	const { loading, setLoading } = React.useContext(Context);
	const [rows, setRows] = React.useState<number>(INITIALVALUE);

	const headerTable = ['Title', 'Post', 'Comments', 'Author'];

	const normalizePostsData = async (postsData: Post[]) => {
		const data: PostData[] = [];

		try {
			for (let index = 0; index < rows; index++) {
				const commentsByPost: Comment[] = await getCommentsByPostId(postsData[index].id);
				const authorOfPost: User = await getUserById(postsData[index].userId);
				data.push({
					title: postsData[index].title,
					body: postsData[index].body,
					comments: commentsByPost.length,
					author: authorOfPost.name,
				});
			}
		} catch (e) {
			throw e;
		}

		return data;
	};

	const postsData = useFetchData({
		getterAll: getAllPosts,
		normalizeData: normalizePostsData,
		setLoading,
		params: rows,
	});

	const handleChangeRows = (event: string) => {
		setRows(parseInt(event, 10));
	};

	return (
		<>
			<InputNumber
				id="number-rows"
				label="Show rows"
				setter={handleChangeRows}
				editValue={rows}
				variant="outlined"
			/>
			{loading || postsData === undefined ? (
				<CircularProgress />
			) : (
				<Table align="center" alignRow="left" headerRows={headerTable} rows={postsData} />
			)}
		</>
	);
};

export default PostsPage;
