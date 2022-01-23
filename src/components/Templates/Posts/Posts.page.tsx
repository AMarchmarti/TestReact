import * as React from 'react';
import { Context } from '../../../contexts/globalContext';
import { Post } from '../../../services/models/Post.model';
import { Comment } from '../../../services/models/Comment.model';
import { getAllPosts } from '../../../services/posts.service';
import { getCommentsByPostId } from '../../../services/comments.service';
import { User } from '../../../services/models/User.model';
import { getUserById } from '../../../services/users.service';
import { Box } from '@material-ui/core';
import Table from '../../Organisms/Table/Table';
import InputNumber from '../../Atoms/InputNumber/InputNumber';
import Loading from '../../Molecules/Loading/Loading';
import useCache from '../../../hooks/useCache';

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
	const [cache, setCache] = useCache('posts');
	const [postsData, setPostsData] = React.useState<PostData[]>([]);

	const headerTable = ['Title', 'Post', 'Comments', 'Author'];

	const normalizePostsData = async (posts: Post[]) => {
		const data: PostData[] = postsData;

		try {
			for (const post of posts) {
				const commentsByPost: Comment[] = await getCommentsByPostId(post.id);
				const authorOfPost: User = await getUserById(post.userId);
				data.push({
					title: post.title,
					body: post.body,
					comments: commentsByPost.length,
					author: authorOfPost.name,
				});
			}
		} catch (e) {
			throw e;
		}

		return data;
	};

	const fetch = async () => {
		const posts: Post[] = (await getAllPosts()).reverse();
		setCache(await normalizePostsData(posts.slice(postsData.length, rows)));
		setPostsData(await normalizePostsData(posts.slice(postsData.length, rows)));
	};

	React.useEffect(() => {
		(async (): Promise<void> => {
			setLoading(true);
			if (!!cache && cache.length >= rows) {
				setPostsData(cache.slice(0, rows));
			} else {
				await fetch();
			}

			setLoading(false);
		})();
	}, [rows]);

	const handleChangeRows = (event: string) => {
		setRows(parseInt(event, 10));
	};

	return (
		<>
			<Box p={1} pr={0} textAlign="end">
				<InputNumber
					id="number-rows"
					label="Show rows"
					setter={handleChangeRows}
					editValue={rows}
					variant="standard"
				/>
			</Box>
			{loading || postsData === undefined ? (
				<Loading />
			) : (
				<Table align="center" alignRow="left" headerRows={headerTable} rows={postsData} />
			)}
		</>
	);
};

export default PostsPage;
