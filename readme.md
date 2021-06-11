# imagemin-advpng

> advpng imagemin plugin

## Install

```
$ npm install imagemin-advpng
```

## Usage

```js
const imagemin = require('imagemin');
const imageminAdvpng = require('imagemin-advpng');

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminAdvpng()
		]
	});

	console.log('Images optimized');
})();
```

## API

### imageminAdvpng(options?)(buffer)

#### options

Type: `object`

##### optimizationLevel

Type: `number`\
Default: `3`

Select an optimization level between `0` and `4`.

Levels:

- `0` Don't compress
- `1` Compress fast (zlib)
- `2` Compress normal (7z)
- `3` Compress extra (7z)
- `4` Compress extreme (zopfli)

##### iterations

Type: `number`

Optionally specify an additional number of iterations to perform for optimization levels 3 and 4.
May provide marginally better compression, at the cost of additional time.

#### buffer

Type: `Buffer`

Buffer to optimize.
