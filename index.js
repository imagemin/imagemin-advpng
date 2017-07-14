'use strict';
const execBuffer = require('exec-buffer');
const advpng = require('advpng-bin');
const isPng = require('is-png');
const tempfile = require('tempfile');

module.exports = opts => buf => {
	opts = Object.assign({optimizationLevel: 3}, opts);

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError(`Expected a \`Buffer\`, got \`${typeof buf}\``));
	}

	if (!isPng(buf)) {
		return Promise.resolve(buf);
	}

	const args = ['--recompress', '-q'];
	const tmp = tempfile();

	if (typeof opts.optimizationLevel === 'number') {
		args.push(`-${opts.optimizationLevel}`);
	}

	args.push(execBuffer.input);

	return execBuffer({
		input: buf,
		bin: advpng,
		args,
		inputPath: tmp,
		outputPath: tmp
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
