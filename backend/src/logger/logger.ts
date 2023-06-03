import * as fs from 'fs';
import * as path from 'path';
import { name as appName } from '../../package.json';

const logsFolderPath = path.resolve(`${__dirname}/../../logs/`);
const logFilesPath = `${logsFolderPath}/${appName}.txt`;

enum ELogLevel {
    Verbose,
    Debug,
    Info,
    Warning,
    Error
}

const initLogger = () => {
    if (!fs.existsSync(logsFolderPath)) {
        fs.mkdirSync(logsFolderPath);
    }

    if (!fs.existsSync(logFilesPath)) {
        fs.writeFileSync(logFilesPath, '');
    }
};

const log = (level: ELogLevel, msg: string, obj?: object): void => {
    const content = {
        datetime: new Date().toISOString(),
        level: ELogLevel[level],
        message: msg,
        obj
    };
    const row = `${JSON.stringify(content)}\r\n`;
    fs.appendFileSync(logFilesPath, row)
}

const readAllLogs = (): string => fs.readFileSync(logFilesPath).toString();

export { ELogLevel, initLogger, log, readAllLogs };
