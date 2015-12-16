#!/usr/bin/env node

'use strict';

const isDataUri = require('is-data-uri');
const toFile = require('data-uri-to-file');
const meow = require('meow');
const fs = require('fs');
const path = require('path');

function getPath(p) {
	return path.resolve(process.cwd(), p);
}

const cli = meow({
	help: [
		'Usage',
		'	$ data-uri-to-file <input> <filename> [options]',
		'',
		'Examples',
		'	$ data-uri-to-file data:image/svg+xml;base64,PD94bWwgdmVyc... ./output',
		'',
		'	$ data-uri-to-file data:image/svg+xml;base64,PD94bWwgdmVyc... ./output.svg --no-ext',
		'',
		'	$ data-uri-to-file ./input.data ./output.svg --no-ext',
		'',
		'Options',
		'	-no-ext: Write a file with no extension by mimetype'
	]
});

if (cli.input.length < 0) {
	cli.showHelp(-1);
}

const input = isDataUri(cli.input[0]) ? cli.input[0] : fs.readFileSync(getPath(cli.input[0]), 'utf8');
let output = cli.input[1] && getPath(cli.input[1]);

toFile(input).then(file => {
	if (output) {
		if (cli.flags.ext !== false) {
			output = `${output}.${file.extension}`;
		}

		fs.writeFileSync(output, file.data, 'utf8');
	} else {
		console.log(file.data.toString());
	}
}).catch(e => {
	console.error(e.toString());
	cli.showHelp(-1);
});
