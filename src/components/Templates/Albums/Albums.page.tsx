import * as React from 'react';
import { Context } from '../../../contexts/globalContext';
import { Album } from '../../../services/models/Album.model';
import { Photo } from '../../../services/models/Photo.model';
import { getAllAlbums } from '../../../services/albums.service';
import { getPhotosByAlbumId } from '../../../services/photos.service';
import { User } from '../../../services/models/User.model';
import { getUserById } from '../../../services/users.service';
import { Box } from '@material-ui/core';
import Table from '../../Organisms/Table/Table';
import InputNumber from '../../Atoms/InputNumber/InputNumber';
import Loading from '../../Molecules/Loading/Loading';
import useCache from '../../../hooks/useCache';

interface AlbumData {
	title: string;
	photos: number;
	author: string;
}

const INITIALVALUE = 5;

const AlbumsPage = () => {
	const { loading, setLoading } = React.useContext(Context);
	const [rows, setRows] = React.useState<number>(INITIALVALUE);
	const [cache, setCache] = useCache('albums');
	const [albumsData, setAlbumsData] = React.useState<AlbumData[]>([]);

	const headerTable = ['Title', 'Photos', 'Author'];

	const normalizeAlbumsData = async (albums: Album[]) => {
		const data: AlbumData[] = albumsData;

		try {
			for (const album of albums) {
				const photosByAlbum: Photo[] = await getPhotosByAlbumId(album.id);
				const authorOfAlbum: User = await getUserById(album.userId);
				data.push({
					title: album.title,
					photos: photosByAlbum.length,
					author: authorOfAlbum.name,
				});
			}
		} catch (e) {
			throw e;
		}

		return data;
	};

	const fetch = async () => {
		const albums: Album[] = (await getAllAlbums()).reverse();
		setCache(await normalizeAlbumsData(albums.slice(albumsData.length, rows)));
		setAlbumsData(await normalizeAlbumsData(albums.slice(albumsData.length, rows)));
	};

	React.useEffect(() => {
		(async (): Promise<void> => {
			setLoading(true);
			if (!!cache && cache.length >= rows) {
				setAlbumsData(cache.slice(0, rows));
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
			{loading || albumsData === undefined ? (
				<Loading />
			) : (
				<Table align="center" alignRow="left" headerRows={headerTable} rows={albumsData} />
			)}
		</>
	);
};

export default AlbumsPage;
