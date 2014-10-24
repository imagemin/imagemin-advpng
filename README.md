# imagemin-advpng [![Build Status](http://img.shields.io/travis/imagemin/imagemin-advpng.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-advpng) [![Build status](https://ci.appveyor.com/api/projects/status/8vw4a6jtvhao3jev)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-advpng)

> advpng imagemin plugin


## Install

```sh
$ npm install --save imagemin-advpng
```


## Usage

```js
var Imagemin = require('imagemin');
var advpng = require('imagemin-advpng');

var imagemin = new Imagemin()
	.src('images/*.png')
	.dest('build/images')
	.use(advpng({ optimizationLevel: 4 }));

imagemin.run(function (err, files) {
	if (err) {
		throw err;
	}

	console.log('Files optimized successfully!'); 
});
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var advpng = require('imagemin-advpng');

gulp.task('default', function () {
	return gulp.src('images/*.png')
		.pipe(advpng({ optimizationLevel: 4 })())
		.pipe(gulp.dest('build/images'));
});
```


## Options

### optimizationLevel

Type: `Number`  
Default: `3`

Select an optimization level between `0` and `4`.

Levels:

`0` Don't compress  
`1` Compress fast (zlib)  
`2` Compress normal (7z)  
`3` Compress extra (7z)  
`4` Compress extreme (zopfli)


## License

MIT © [imagemin](https://github.com/imagemin)
