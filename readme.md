# imagemin-advpng [![Build Status](http://img.shields.io/travis/imagemin/imagemin-advpng.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-advpng) [![Build status](https://ci.appveyor.com/api/projects/status/8vw4a6jtvhao3jev?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-advpng)

> advpng imagemin plugin


## Install

```
$ npm install imagemin-advpng
```


## Usage

```js
const imagemin = require('imagemin');
const imageminAdvpng = require('imagemin-advpng');

imagemin(['images/*.png'], 'build/images', {use: [imageminAdvpng()]}).then(() => {
	console.log('Images optimized');
});
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

#### buffer

Type: `Buffer`

Buffer to optimize.


## License

MIT © [imagemin](https://github.com/imagemin)
