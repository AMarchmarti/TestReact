import { get } from './http.service';
import { Album } from './models/Album.model';

const getAllAlbums = async (): Promise<Album[]> => {
	let albums: Album[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/albums');
		albums = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}

	return albums;
};

const getAlbumsByUserId = async (userId: number | string): Promise<Album[]> => {
	let albums: Album[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
		albums = response;
	} catch (e) {
		console.log('e :>> ', e);
		throw e;
	}

	return albums;
};

export default { getAllAlbums, getAlbumsByUserId };
