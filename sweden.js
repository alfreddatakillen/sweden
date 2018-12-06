class Sweden {

	constructor() {
		this._fns = [];
	}

	lock(fn) {
		this._fns.push(fn);
		if (this._fns.length === 1) setImmediate(() => this._runNext());
	}

	_runNext() {
		if (this._fns.length === 0) return;
		const fn = this._fns[0];
		const unlock = () => {
			if (this._fns[0] === fn) {
				this._fns.shift();
				setImmediate(() => this._runNext());
			}
		};
		fn(unlock);
	}

}

module.exports = Sweden;

