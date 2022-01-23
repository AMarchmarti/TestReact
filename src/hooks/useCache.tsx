import * as React from 'react';
import CacheFactory from '../services/core/cache/cache.factory';

const useCache = (cacheName: string) => {
	const cacheStorage = CacheFactory.fromSessionStorage();
	const [storedValue, setStoreValue] = React.useState(() => {
		if (cacheStorage.has(cacheName)) {
			return cacheStorage.get(cacheName);
		}
	});

	const setValue = (value: any) => {
		cacheStorage.put(cacheName, value);
		setStoreValue(value);
	};
	return [storedValue, setValue];
};

export default useCache;
