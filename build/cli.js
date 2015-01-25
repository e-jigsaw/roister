(function() {
  var compile, fs, program;

  fs = require('fs');

  program = require('commander');

  compile = require('./compile');

  module.exports = function() {
    var code, source, write;
    program.version(require('../package.json').version).option('-c, --compile <path>', 'compile file').option('-p, --print', 'print code').option('-o, --output <path>', 'output file').parse(process.argv);
    code = null;
    write = {
      flag: false,
      path: null
    };
    if (program.compile) {
      source = fs.readFileSync(program.compile);
      code = compile(source);
      write.flag = true;
      write.path = program.compile.replace(/\.jade$/, '.js');
    }
    if (program.print) {
      console.log(code);
      write.flag = false;
    }
    if (program.output) {
      if (!write.flag) {
        console.error('Error: source file not found');
      }
      write.flag = true;
      write.path = program.output;
    }
    if (write.flag) {
      return fs.writeFileSync(write.path, code);
    }
  };

}).call(this);
