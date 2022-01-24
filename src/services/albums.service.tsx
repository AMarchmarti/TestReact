import { get } from './http.service';
import { Album } from './models/Album.model';

export const getAllAlbums = async (): Promise<Album[]> => {
	let albums: Album[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/albums');
		albums = response;
	} catch (e) {
		throw e;
	}

	return albums;
};

export const getAlbumsByUserId = async (userId: number | string): Promise<Album[]> => {
	let albums: Album[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
		albums = response;
	} catch (e) {
		throw e;
	}

	return albums;
};
