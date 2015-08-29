/**
 * Created by John on 2015-08-29.
 */

var gulp = require('gulp');

// 返回一个 callback，因此系统可以知道它什么时候完成
gulp.task('one', function(cb) {
    // 做一些事 -- 异步的或者其他的
    cb(); // 如果 err 不是 null 或 undefined，则会停止执行，且注意，这样代表执行失败了
});

// 定义一个所依赖的 task 必须在这个 task 执行之前完成
gulp.task('two', ['one'], function() {
    // 'one' 完成后
});

gulp.task('default', ['one', 'two']);