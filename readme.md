# imagemin-advpng ![GitHub Actions Status](https://github.com/imagemin/imagemin-advpng/workflows/test/badge.svg?branch=master)


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

### imageminAdvpng([options])(buffer)

#### options

Type: `Object`

##### optimizationLevel

Type: `number`<br>
Default: `3`

Select an optimization level between `0` and `4`.

Levels:

`0` Don't compress<br>
`1` Compress fast (zlib)<br>
`2` Compress normal (7z)<br>
`3` Compress extra (7z)<br>
`4` Compress extreme (zopfli)

##### iterations

Type: `number`<br>

Optionally specify an additional number of iterations to perform for optimization levels 3 and 4.
May provide marginally better compression, at the cost of additional time.

#### buffer

Type: `Buffer`

Buffer to optimize.


## License

MIT © [imagemin](https://github.com/imagemin)
