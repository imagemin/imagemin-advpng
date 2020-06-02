'use strict';
const execBuffer = require('exec-buffer');
const advpng = require('advpng-bin');
const isPng = require('is-png');
const tempfile = require('tempfile');

module.exports = options => input => {
	options = {
		optimizationLevel: 3,
		...options
	};

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

	const temporary = tempfile();

	if (Number.isInteger(options.optimizationLevel)) {
		args.push(`-${options.optimizationLevel}`);
	}

	if (Number.isInteger(options.iterations)) {
		args.push('--iter', options.iterations);
	}

	args.push(execBuffer.input);

	return execBuffer({
		input,
		bin: advpng,
		args,
		inputPath: temporary,
		outputPath: temporary
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};
