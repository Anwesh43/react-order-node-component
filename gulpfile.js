const gulp = require('gulp')
const browserify = require('browserify')
const fs = require('fs')
gulp.task('compileES6', () => {
	browserify('index.js').transform('babelify', {presets : ['es2015', 'react']}).bundle().pipe(fs.createWriteStream('bundle.js'))
})

gulp.task('watchCompileES6', () => {
	gulp.watch('index.js', 'compileES6')
})