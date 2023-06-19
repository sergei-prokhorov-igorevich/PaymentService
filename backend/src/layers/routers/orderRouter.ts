import { Router } from 'express';
import { getOrderByGuid, payByOrder } from '../business/order';
import { EHttpStatusCode } from '../../enums/httpStatusCode';
import { ELogLevel, log } from '../../utils/logger';

const createOrderRouter = async (): Promise<Router> => {
  const router = Router();

  router.get('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;
    const order = await getOrderByGuid(orderGuid);

    if (order) {
      res.send(order);
    } else {
      res.sendStatus(EHttpStatusCode.NotFound);
    }
  });

  router.post('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;
    const password = req.body['password'];

    if (!password) {
      log(ELogLevel.Warning, 'password is empty.');
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
