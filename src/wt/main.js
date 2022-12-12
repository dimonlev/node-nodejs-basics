import { Worker } from 'worker_threads';
import os from 'os';

const numberCpus = os.cpus().length;

const performCalculations = async () => {
  const workersArray = []

  for (let i = 0; i < numberCpus; i++) {
    let number = 10 + i;
    const worker = new Worker('./worker.js', { workerData: { num: number } });
    workersArray.push(worker);
  }
  for (const [index, worker] of workersArray.entries()) {
    let number = 10;
    worker.once("message", result => {
      console.log(`${number + index}th Fibonacci No: ${result}`);
    });

    worker.on("error", error => {
      console.log(error);
    });

    worker.on("exit", exitCode => {
      // console.log(`It exited with code ${exitCode}`);
    })
  }
};

await performCalculations();
