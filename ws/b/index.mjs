import ora from 'ora';

export default function() {
  const spinner = ora().start('loading 3秒钟后结束');

  setTimeout(() => {
    spinner.stop();
  }, 3000);
}
