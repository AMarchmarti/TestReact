import { get } from './http.service';
import { Photo } from './models/Photo.model';

export const getAllPhotos = async (): Promise<Photo[]> => {
	let photos: Photo[];
	try {
		const response: any = get('https://jsonplaceholder.typicode.com/photos');
		photos = response;
	} catch (e) {
		throw e;
	}

	return photos;
};

export const getPhotosByAlbumId = async (albumId: number | string): Promise<Photo[]> => {
	let photos: Photo[];
	try {
		const response: any = get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
		photos = response;
	} catch (e) {
		throw e;
	}

	return photos;
};
