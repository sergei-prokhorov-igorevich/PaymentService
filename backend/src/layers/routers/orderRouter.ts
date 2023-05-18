import { Router } from 'express';
import { getOrderByGuid } from '../business';

const createOrderRouter = async (): Promise<Router> => {
  const router = Router();

  router.get('/:orderGuid', async (req, res) => {
    const orderGuid = req.params.orderGuid;

    if (!orderGuid) {
      res.sendStatus(400);
      return;
    }

    const order = await getOrderByGuid(orderGuid);

    if (order) {
      res.send(order);
    } else {
      res.sendStatus(404);
    }
  });

  return router;
};

export { createOrderRouter };