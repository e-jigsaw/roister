jade = require 'jade'
cheerio = require 'cheerio'
coffee = require 'coffee-script'

module.exports = (input)->
  compiler = jade.compile input
  html = compiler()

  $ = cheerio.load html
  coffeeCode = $('script').eq(0).text()
  jsCode = coffee.compile coffeeCode,
    bare: true

  $('script').remove()

  tagName = $.root().children()[0].tagName
  htmlElement = $.root().children().eq(0).html()

  """
    riot.tag('#{tagName}', '#{htmlElement}', function(opts){
    #{jsCode}
    });
  """
