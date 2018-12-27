'use strict';
const execBuffer = require('exec-buffer');
const advpng = require('advpng-bin');
const isPng = require('is-png');
const tempfile = require('tempfile');

module.exports = options => input => {
	options = Object.assign({
		optimizationLevel: 3
	}, options);

	if (!Buffer.isBuffer(input)) {
		return Promise.reject(new TypeError(`Expected a \`Buffer\`, got \`${typeof input}\``));
	}

	if (!isPng(input)) {
		return Promise.resolve(input);
	}

	const args = [
		'--recompress',
		'--quiet'
	];

	const tmp = tempfile();

	if (typeof options.optimizationLevel === 'number') {
		args.push(`-${options.optimizationLevel}`);
	}

	if (typeof options.iterations === 'number') {
		args.push('--iter');
		args.push(options.iterations);
	}

	args.push(execBuffer.input);

	return execBuffer({
		input,
		bin: advpng,
		args,
		inputPath: tmp,
		outputPath: tmp
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};
