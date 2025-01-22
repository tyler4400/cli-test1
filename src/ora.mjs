import ora, { oraPromise } from "ora";

let percent = 0;

// const spinner = ora('do...')
// spinner.start()
//
// spinner.color = 'green';
// spinner.text = 'Loading ' + percent + '%';
// spinner.prefixText = 'Download chalk';

// setTimeout(() => {
//   spinner.stop()
// }, 2000)

// let task = setInterval(() => {
//   percent += 10;
//   spinner.text = 'Loading ' + percent + '%';
//   if (percent >= 100) {
//     spinner.stop();
//     spinner.succeed('Download finish!');
//     clearInterval(task);
//     task = undefined;
//   }
// }, 500);

(async function() {
  const promise = new Promise((resolve) => {
    console.log('doing something...');
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  await oraPromise(promise, {
    successText: 'success!',
    failText: 'failed!',
    prefixText: 'Download ora',
    text: 'Loading',
    spinner: {
      interval: 120, // Optional
      frames: ['-', '\\', '|', '/', '-'],
    }
  });
})();
