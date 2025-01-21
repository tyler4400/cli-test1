#!/usr/bin/env node

/**
 * bin项用来指定每个内部命令对应的可执行文件的位置
 * 在模块以依赖的方式被安装，如果存在bin选项。在node_modules/.bin/生成对应的文件，
 * Npm会寻找这个文件，在node_modules/.bin/目录下建立符号链接。
 * 由于node_modules/.bin/目录会在运行时加入系统的PATH变量，因此在运行npm时，
 * 就可以不带路径，直接通过命令来调用这些脚本。
 */
//注册命令， 实现参数解析
const process = require('node:process')
// console.log(process.argv)


const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const arg = hideBin(process.argv)

yargs(arg)
    .usage('Usage: imooc-test [command] <options>')
    // .demandCommand(1, '必须至少输入一个命令')
    .alias('h', 'help')
    .alias('v', 'version')
    .options({
      debug: {
        type: 'boolean',
        describe: '这里是选项描述',
        alias: 'd'
      }
    })
    .option('ci', { type: 'string', describe: '这是ci命令', alias: 'c' })
    .command('init [name]', 'init a porject', yargs => {
      yargs.option('name', {
        type: 'string',
        describe: '项目名称',
        alias: 'n'
      })
    }, argv => {
      console.log('init', argv)
    })
    .recommendCommands()
    .strict() // 严格模式， 输入错误会给提示
    .argv
