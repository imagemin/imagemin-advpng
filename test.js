const fs = require('fs');
const path = require('path');
const test = require('ava');
const isPng = require('is-png');
const imageminAdvpng = require('.');

const fixture = fs.readFileSync(path.join(__dirname, 'fixture.png'));

test('main', async t => {
	const data = await imageminAdvpng()(fixture);
	t.true(data.length < fixture.length);
	t.true(isPng(data));
});
