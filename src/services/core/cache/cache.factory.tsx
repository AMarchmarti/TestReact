import CacheSessionManager from './cache-session.manager';

export default class CacheFactory {
	public static fromLocalStorage(): CacheSessionManager {
		if ('undefined' == typeof window.localStorage) {
			throw new Error('LocalStorage not available.');
		}

		return new CacheSessionManager(window.localStorage);
	}

	public static fromSessionStorage(): CacheSessionManager {
		if ('undefined' == typeof window.sessionStorage) {
			throw new Error('SessionStorage not available.');
		}

		return new CacheSessionManager(window.sessionStorage);
	}
}
