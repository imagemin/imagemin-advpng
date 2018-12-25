import fs from 'fs';
import path from 'path';
import test from 'ava';
import isPng from 'is-png';
import imageminAdvpng from '.';

const fixture = fs.readFileSync(path.join(__dirname, 'fixture.png'));

test('main', async t => {
	const data = await imageminAdvpng()(fixture);
	t.true(data.length < fixture.length);
	t.true(isPng(data));
});
