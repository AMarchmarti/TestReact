import * as React from 'react';
import { Context } from '../../../contexts/globalContext';
import { Album } from '../../../services/models/Album.model';
import { Photo } from '../../../services/models/Photo.model';
import { getAllAlbums } from '../../../services/albums.service';
import { getPhotosByAlbumId } from '../../../services/photos.service';
import { User } from '../../../services/models/User.model';
import { getUserById } from '../../../services/users.service';
import { CircularProgress } from '@material-ui/core';
import Table from '../../Molecules/Table/Table';
import InputNumber from '../../Atoms/InputNumber/InputNumber';
import useFetchData from '../../../hooks/useFetchData';

interface AlbumData {
	title: string;
	photos: number;
	author: string;
}

const INITIALVALUE = 5;

const AlbumsPage = () => {
	const { loading, setLoading } = React.useContext(Context);
	const [rows, setRows] = React.useState<number>(INITIALVALUE);

	const headerTable = ['Title', 'Photos', 'Author'];

	const normalizeAlbumsData = async (albumData: Album[]) => {
		const data: AlbumData[] = [];

		try {
			for (let index = 0; index < rows; index++) {
				const photosByAlbum: Photo[] = await getPhotosByAlbumId(albumData[index].id);
				const authosOfAlbum: User = await getUserById(albumData[index].userId);
				data.push({
					title: albumData[index].title,
					photos: photosByAlbum.length,
					author: authosOfAlbum.name,
				});
			}
		} catch (e) {
			throw e;
		}

		return data;
	};

	const albumData = useFetchData({
		getterAll: getAllAlbums,
		normalizeData: normalizeAlbumsData,
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
			{loading || albumData === undefined ? (
				<CircularProgress />
			) : (
				<Table align="center" alignRow="left" headerRows={headerTable} rows={albumData} />
			)}
		</>
	);
};

export default AlbumsPage;
