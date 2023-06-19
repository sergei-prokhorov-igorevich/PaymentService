import * as fs from 'fs/promises';
import * as path from 'path';
import { name as appName } from '../../package.json';

const logsFolderPath = path.resolve(`${__dirname}/../logs/`);
const logFilesPath = `${logsFolderPath}/${appName}.txt`;

enum ELogLevel {
  Verbose,
  Debug,
  Info,
  Warning,
  Error,
}

const initLogger = async () => {
  try {
    await fs.stat(logsFolderPath);
  } catch {
    await fs.mkdir(logsFolderPath);
  }

  try {
    await fs.stat(logFilesPath);
  } catch {
    await fs.writeFile(logFilesPath, '');
  }
};

const log = async (level: ELogLevel, msg: string, obj?: object): Promise<void> => {
  const content = {
    datetime: new Date().toISOString(),
    level: ELogLevel[level],
    message: msg,
    obj,
  };
  const row = `${JSON.stringify(content)}\r\n`;
  return await fs.appendFile(logFilesPath, row);
};

const readAllLogs = async (): Promise<string> => (await fs.readFile(logFilesPath)).toString();

export { ELogLevel, initLogger, log, readAllLogs };
