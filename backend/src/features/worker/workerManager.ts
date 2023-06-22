import { Worker } from 'node:worker_threads';

let worker: Worker | null;

function runWorker() {
  if (!worker) {
    console.log('Worker "fileLogWorker" started.');
    worker = new Worker(__dirname + '/fileLogWorker.js');

    worker.on('exit', () => {
      console.log('Worker "fileLogWorker" exited.');
      worker = null;
    });
  }
}

function onMessageWorker(onMessage: (chunk: string) => void) {
  worker!.on('message', onMessage);
}

function terminateWorker() {
  worker?.terminate();
}

export { runWorker, onMessageWorker, terminateWorker };
