import test from 'ava';
import tempWrite from 'temp-write';
import execa from 'execa';
import fs from 'fs';

test(async t => {
	const data = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvdmc+Cgo=';
	const input = tempWrite.sync(data);
	const output = tempWrite.sync('');

	await execa('./cli.js', [input, output, '--no-ext']);
	t.is(fs.readFileSync(output, 'utf8'), 'PD94bWwgdmVyc2lvdmc+Cgo=');

	await execa('./cli.js', [input, output]);
	t.is(fs.readFileSync(`${output}.svg`, 'utf8'), 'PD94bWwgdmVyc2lvdmc+Cgo=');

	const std = await execa('./cli.js', [input]);
	t.is(std.stdout, 'PD94bWwgdmVyc2lvdmc+Cgo=');
});
