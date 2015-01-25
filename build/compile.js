(function() {
  var cheerio, coffee, jade;

  jade = require('jade');

  cheerio = require('cheerio');

  coffee = require('coffee-script');

  module.exports = function(input) {
    var $, coffeeCode, compiler, html, htmlElement, jsCode, tagName;
    compiler = jade.compile(input);
    html = compiler();
    $ = cheerio.load(html);
    coffeeCode = $('script').eq(0).text();
    jsCode = coffee.compile(coffeeCode, {
      bare: true
    });
    $('script').remove();
    tagName = $.root().children()[0].tagName;
    htmlElement = $.root().children().eq(0).html();
    return "riot.tag('" + tagName + "', '" + htmlElement + "', function(opts){\n" + jsCode + "\n});";
  };

}).call(this);
