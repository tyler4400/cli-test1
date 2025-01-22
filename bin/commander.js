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
      console.log('\x1B[41m%s', 'clone', source, destination, cmdObj);
    })

const service = new commander.Command('service')
service
    .command('start [port]')
    // .option('-p, --port [port]', 'Port of the server')
    .description('启动服务')
    .action((port) => {console.log('\x1B[41m%s', '启动服务', port)})
service
    .command('stop')
    // .option('-p, --port [port]', 'Port of the server')
    .description('停止服务')
    .action(() => {console.log('\x1B[41m%s\x1b[0m', '停止服务')})
// 添加子命令
program.addCommand(service)




// red
console.log('\x1b[31mhello imooc\x1b[39m');
console.log('\u001b[31mhello imooc\u001b[39m');

// blue
console.log('\u001b[42m\u001b[34mhello imooc\u001b[39m\u001b[49m');

// 特殊字符
// \n
console.log('\u001b[31mhello\u001b[39m\n\u001b[31mimooc\u001b[39m');
// console.log(chalk.red('hello imooc\nhello imooc2\nhello imooc3'));
// // \u001b
// console.log(chalk.red('\u001b[31mhi~\u001b[39mall right'));


program.parse(process.argv)
