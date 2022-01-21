import ErrorResponse from './ErrorResponse';

class HttpException extends Error {
	private readonly _code: string;
	private readonly _description: string;
	private readonly _message: string;

	constructor(error: ErrorResponse) {
		super(error.error);
		this._message = error.error || '';
		this._code = error.status || '';
		this._description = error.description || '';
	}

	get message(): string {
		return this._message;
	}

	get code(): string {
		return this._code;
	}

	get description(): string | undefined {
		return this._description;
	}
}

export default HttpException;
