assert = require 'power-assert'
compile = require '../src/compile'

it 'should compile valid markup', ->
  result = compile '''
    sample
      p test { value }
      script.
        if @isCoffee() then console.log 'caffeine' else 'non-caffeine'
        @value = 'code'
  '''

  assert.equal result, """
    riot.tag('sample', '<sample><p>test { value }</p></sample>', function(opt){
    if (this.isCoffee()) {
      console.log('caffeine');
    } else {
      'non-caffeine';
    }

    this.value = 'code';

    })
  """
