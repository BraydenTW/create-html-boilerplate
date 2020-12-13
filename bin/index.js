#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

const fs = require("fs-extra");

const commandPackage = require("../package.json");

program
  .version(commandPackage.version, "-v|--version")
  .arguments("[projectPath]")
  .action((projectPath) => {
    fs.copy("./template/", projectPath)
      .then(() => console.log("Files copied successfully! ✨"))
      .catch((err) => console.error(err));
  });

program.parse(process.argv);
