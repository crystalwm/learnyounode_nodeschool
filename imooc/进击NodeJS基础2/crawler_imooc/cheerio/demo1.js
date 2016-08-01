var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class="title">Hello world</h2>');

var a=$('h2.title').text('Hello there!');
console.log(a)
var b=$('h2').addClass('welcome');
console.log(b);

$.html();

