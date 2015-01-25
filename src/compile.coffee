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
  .replace /\n/g, '\n  '
  .replace /\n\s\s$/, ''

  $('script').remove()

  tagName = $.root().children()[0].tagName

  """
    riot.tag('#{tagName}', '#{$.html()}', function(opt){
      #{jsCode}
    })
  """
