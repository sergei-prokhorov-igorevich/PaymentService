import { Router } from 'express';
import { payByOrder } from '../business';
import { ELogLevel, log } from '../../logger/logger';
import { EHttpStatusCode } from '../../enums/httpStatusCode';

const createPayRouter = async (): Promise<Router> => {
  const router = Router();

  router.post('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;
    const password = req.body['password'];

    if (!password) {
      log(ELogLevel.Warning, 'password is empty.');
      res.sendStatus(EHttpStatusCode.BadRequest);
      return;
    }

    const httpStatusCode = await payByOrder(orderGuid, password);

    res.sendStatus(httpStatusCode);
  });

  return router;
};

export { createPayRouter };
