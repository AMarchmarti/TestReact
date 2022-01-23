export default interface CacheStorage {
	delete(cacheName: string): void;
	purge(): void;
	has(cacheName: string): boolean;
	keys(): { [key: string]: string };
	put(cacheName: string, response: any): void;
}
