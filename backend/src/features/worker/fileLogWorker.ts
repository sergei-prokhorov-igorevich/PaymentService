import { parentPort } from 'worker_threads';
import { EOL } from 'node:os';
import * as fsSync from 'fs';
import * as fs from 'fs/promises';
import { logsFilePath } from '../logger/loggerCore';

async function checkFile(lastFileSize: number): Promise<number> {
  var newFileSize = (await fs.stat(logsFilePath)).size;

  const stream = fsSync.createReadStream(logsFilePath, { start: lastFileSize, end: newFileSize });

  stream.on('data', (chunk: BufferSource) => {
    var string = new TextDecoder().decode(chunk).split(EOL).slice(0, -1);

    parentPort?.postMessage(string);
  });

  return newFileSize;
}

async function process() {
  let lastFileSize = await checkFile(0);

  fsSync.watchFile(logsFilePath, async () => {
    lastFileSize = await checkFile(lastFileSize);
  });
}

process();
