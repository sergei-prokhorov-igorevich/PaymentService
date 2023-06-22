import { EOL } from 'node:os';
import * as fs from 'fs/promises';
import * as path from 'path';
import { name as appName } from '../../../package.json';

const logsFolderPath = path.resolve(`${__dirname}/../logs/`);
const logsFilePath = `${logsFolderPath}/${appName}.txt`;

enum ELogLevel {
  Verbose,
  Debug,
  Info,
  Warning,
  Error,
}

async function initLogger() {
  try {
    await fs.stat(logsFolderPath);
  } catch {
    await fs.mkdir(logsFolderPath);
  }

  try {
    await fs.stat(logsFilePath);
  } catch {
    await fs.writeFile(logsFilePath, '');
  }
}

async function log(level: ELogLevel, msg: string, obj?: object): Promise<string> {
  const content = {
    datetime: new Date().toISOString(),
    level: ELogLevel[level],
    message: msg,
    obj,
  };
  const line = `${JSON.stringify(content)}${EOL}`;
  await fs.appendFile(logsFilePath, line);

  return line;
}

export { ELogLevel, initLogger, log, logsFilePath };
