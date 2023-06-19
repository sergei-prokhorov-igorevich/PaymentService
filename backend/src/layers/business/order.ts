import { Order, TOrder } from '../database/models/order';

const getOrderByGuid = async (orderGuid: string): Promise<TOrder | null> => {
  return await Order.findOne({ orderGuid });
};

const payByOrder = async (orderGuid: string, password: string): Promise<boolean> => {
  // Need validation payment transaction and update order status in database. In this demo-project next code here as an simple example!
  if (!password) {
    return false;
  }

  return Boolean(await Order.findOne({ orderGuid }));
};

export { getOrderByGuid, payByOrder };
