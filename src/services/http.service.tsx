import HttpException from './core/HttpException';
import HttpMethod from './core/HttpMethod';
import { HTTP_SUCCESS_STATUS, ResponseStatus } from './core/ResponseStatus';
const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Cache-control': 'no-cache',
	Pragma: 'no-cache',
};

const createResponse = async (response: Response): Promise<any> => {
	const responseStatus = response.status;
	if (!HTTP_SUCCESS_STATUS.includes(responseStatus)) {
		const responseData = (await response.json()) || { error: null };
		throw new HttpException(responseData);
	}

	return ResponseStatus.NO_CONTENT === responseStatus ? await response.text() : await response.json();
};

const fetch = (path: string, body?: any, method?: HttpMethod) =>
	new Promise((resolve, reject) => {
		const sendInformation = body
			? {
					method: method,
					body: JSON.stringify(body),
			  }
			: {};
		window
			.fetch(path, {
				headers: {
					...headers,
				},
				...sendInformation,
			})
			.then((response) => {
				return createResponse(response);
			})
			.then(resolve)
			.catch(reject);
	});

export const get = (path: string) => fetch(path);
export const post = (path: string, body: any) => fetch(path, body, HttpMethod.POST);
export const put = (path: string, body: any) => fetch(path, body, HttpMethod.PUT);
