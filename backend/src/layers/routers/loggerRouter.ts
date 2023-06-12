import { Router } from 'express';
import { readAllLogs } from '../../logger/logger';

const createLoggerRouter = (): Router => {
  const router = Router();

  router.get('/getAll', async (_req, res) => {
    const logs = (await readAllLogs()).replace('\r\n', '<br>');
    res.send(logs);
  });

  return router;
};

export { createLoggerRouter };
