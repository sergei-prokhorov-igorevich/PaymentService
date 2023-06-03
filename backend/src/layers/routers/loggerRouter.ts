import { Router } from 'express';
import { payByOrder } from '../business';
import { readAllLogs } from '../../logger/logger';

const createLoggerRouter = (): Router => {
  const router = Router();

  router.get('/getAll', (req, res) => {
    const logs = readAllLogs().replace('\r\n', '<br>');
    res.send(logs);
  });

  return router;
};

export { createLoggerRouter };