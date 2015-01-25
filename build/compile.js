(function() {
  var cheerio, coffee, jade;

  jade = require('jade');

  cheerio = require('cheerio');

  coffee = require('coffee-script');

  module.exports = function(input) {
    var $, coffeeCode, compiler, html, jsCode, tagName;
    compiler = jade.compile(input);
    html = compiler();
    $ = cheerio.load(html);
    coffeeCode = $('script').eq(0).text();
    jsCode = coffee.compile(coffeeCode, {
      bare: true
    }).replace(/\n/g, '\n  ').replace(/\n\s\s$/, '');
    $('script').remove();
    tagName = $.root().children()[0].tagName;
    return "riot.tag('" + tagName + "', '" + ($.html()) + "', function(opt){\n  " + jsCode + "\n})";
  };

}).call(this);