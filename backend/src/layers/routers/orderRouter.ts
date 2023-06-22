import { Router } from 'express';
import { getOrderByGuid, payByOrder } from '../business/order';
import { EHttpStatusCode } from '../../enums/httpStatusCode';
import { logVerbose } from '../../features/logger/loggerClient';

const createOrderRouter = async (): Promise<Router> => {
  const router = Router();

  router.get('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;

    logVerbose(`Get order '${orderGuid}'.`);

    const order = await getOrderByGuid(orderGuid);

    if (order) {
      res.send(order);
    } else {
      logVerbose(`Order '${orderGuid}' not found.`);
      res.sendStatus(EHttpStatusCode.NotFound);
    }
  });

  router.post('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;
    const password = req.body['password'];

    logVerbose(`Pay by order '${orderGuid}'.`);

    if (!password) {
      logVerbose('password is empty.');
      res.sendStatus(EHttpStatusCode.BadRequest);
      return;
    }

    const result = await payByOrder(orderGuid, password);
    const httpStatusCode = result ? EHttpStatusCode.Ok : EHttpStatusCode.NotFound;

    res.sendStatus(httpStatusCode);
  });

  return router;
};

export { createOrderRouter };
