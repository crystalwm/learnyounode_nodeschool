/**
 * Created by John on 2015-08-29.
 */

var gulp = require('gulp');

// ����һ�� callback�����ϵͳ����֪����ʲôʱ�����
gulp.task('one', function(cb) {
    // ��һЩ�� -- �첽�Ļ���������
    cb(); // ��� err ���� null �� undefined�����ִֹͣ�У���ע�⣬��������ִ��ʧ����
});

// ����һ���������� task ��������� task ִ��֮ǰ���
gulp.task('two', ['one'], function() {
    // 'one' ��ɺ�
});

gulp.task('default', ['one', 'two']);