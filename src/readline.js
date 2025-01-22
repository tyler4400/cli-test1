/* node基本库 readline学习 */

const readline = require('node:readline');

const ac = new AbortController()
const signal = ac.signal;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('your name:', { signal }, answer => {
  console.log(answer)
  rl.close();
})

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
  rl.close();
}, { once: true });

setTimeout(() => ac.abort(), 4000);



process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!');
  } else {
    console.log('error');
    throw error;
  }
});



/*
强制将函数转换为构建函数
createInterface 的源码
 */
// if (!(this instanceof Interface)) {
//   return new Interface(input, output, completer, terminal);
// }
