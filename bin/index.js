#!/usr/bin/env node
const { program } = require('commander');
const { main } = require('../lib/actions.js');

program.version(require('../package.json').version, '-v|--version');

program.arguments('[projectName]').action((projectName) =>
  main(projectName, {
    template: program.template,
  })
);

program.parse(process.argv);
