/**
 * Created by John on 2015-08-11.
 */
var url=require('url');
var path=require('path');
var url_parse=url.parse('http://localhost:8080/api/parsetime?iso=2013-08-10T12:10:15.474Z',true);
var path_basename=path.basename(url_parse.pathname);
console.log(path_basename);