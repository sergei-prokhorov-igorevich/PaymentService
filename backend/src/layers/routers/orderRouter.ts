import { Router } from 'express';
import { getOrderByGuid } from '../business';
import { EHttpStatusCode } from '../../enums/httpStatusCode';

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

  return router;
};

export { createOrderRouter };
