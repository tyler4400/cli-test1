/**
 * 这里的Demo练习 来自官网
 * https://github.com/SBoudrias/Inquirer.js/tree/main?tab=readme-ov-file
 */

import { input, confirm } from "@inquirer/prompts";
import chalk from 'chalk';

const answer = await input({ message: chalk.green('输入姓名') })
console.log(answer)


const hexRegEx = /(\d|[a-f])/gim;
const isHex = (value) =>
    (value.match(hexRegEx) || []).length === value.length &&
    (value.length === 3 || value.length === 6);

const demo = async () => {
  let answer;

  answer = await input({
    message: "What's your favorite food?",
    default: 'Croissant',
  });
  console.log('Answer:', answer);

  answer = await input({
    message: 'Enter an hex color?',
    transformer(value = '', { isFinal }) {
      return isFinal ? chalk.underline(value) : value;
    },
    validate: (value = '') => isHex(value) || 'Pass a valid hex value',
  });
  console.log('Answer:', answer);

  answer = await input({
    message: '(Slow validation) provide a number:',
    validate: (value) =>
        new Promise((resolve) => {
          setTimeout(
              () => resolve(!Number.isNaN(Number(value)) || 'You must provide a number'),
              3000,
          );
        }),
  });
  console.log('Answer:', answer);
};

try {
 await demo()
}catch (error) {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!');
  } else {
    // Rethrow unknown errors
    throw error;
  }
}

console.log(
    'Answer:',
    await confirm({
      message: 'Confirm with your custom transformer function?',
      transformer: (answer) => (answer ? '👍' : '👎'),
    }),
);
