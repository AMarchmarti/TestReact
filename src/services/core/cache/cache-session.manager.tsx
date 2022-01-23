import CacheStorage from './cache-storage.interface';

class CacheSessionManager implements CacheStorage {
	private readonly storage: Storage;
	constructor(storage: Storage) {
		this.storage = storage;
	}

	delete(cacheName: string): void {
		return this.storage.removeItem(cacheName);
	}

	purge(): void {
		return this.storage.clear();
	}

	has(cacheName: string): boolean {
		return !!this.storage.getItem(cacheName);
	}

	get(cacheName: string): any | null {
		const item = this.storage.getItem(cacheName);
		return item ? JSON.parse(item) : null;
	}

	keys(): { [key: string]: string } {
		return { ...this.storage };
	}

	put(cacheName: string, response: any): void {
		return this.storage.setItem(cacheName, JSON.stringify(response));
	}
}

export default CacheSessionManager;
