#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');
const process = require('node:process');

// const { program } = commander
const program = new commander.Command(); //手动化实例

program
    .option('-d, --debug', 'The command debug')
    .usage('<command> [options]')
    .version(pkg.version)
    // .parse(process.argv)
// console.log(process.argv)


const clone = program.command('clone <sourece> [destination]')
clone
    .description('科隆项目')
    .option('-f --force', '是否强制科隆')
    .action((source, destination, cmdObj) => {
      console.log('clone', source, destination, cmdObj);
    })

const service = new commander.Command('service')
service
    .command('start [port]')
    // .option('-p, --port [port]', 'Port of the server')
    .description('启动服务')
    .action((port) => {console.log('启动服务', port)})
service
    .command('stop')
    // .option('-p, --port [port]', 'Port of the server')
    .description('停止服务')
    .action(() => {console.log('停止服务')})
// 添加子命令
program.addCommand(service)

program.parse(process.argv)
