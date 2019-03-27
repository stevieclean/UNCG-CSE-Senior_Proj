export default class EventMessage {
	constructor(message, dest, source) {
		this._message = message;
		this._dest = message;
		this._source = source;
	}

	get message() {
		return this._message;
	}

	get dest() {
		return this._dest;
	}

	get source() {
		return this._source;
	}
}