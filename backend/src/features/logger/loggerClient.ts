import { ELogLevel, log } from './loggerCore';

function logVerbose(msg: string, obj?: object) {
  return log(ELogLevel.Verbose, msg, obj);
}

function logDebug(msg: string, obj?: object) {
  return log(ELogLevel.Debug, msg, obj);
}

function logInfo(msg: string, obj?: object) {
  return log(ELogLevel.Info, msg, obj);
}

function logWarning(msg: string, obj?: object) {
  return log(ELogLevel.Warning, msg, obj);
}

function logError(msg: string, obj?: object) {
  return log(ELogLevel.Error, msg, obj);
}

export { logVerbose, logDebug, logInfo, logWarning, logError };
