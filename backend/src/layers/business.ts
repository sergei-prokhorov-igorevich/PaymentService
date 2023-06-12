import { EHttpStatusCode } from '../enums/httpStatusCode';
import { TOrder } from '../types/order';
import { ordersCollection } from './database';

const getOrderByGuid = async (orderGuid: string): Promise<TOrder | null> => {
  const request = { orderGuid };
  return await ordersCollection.findOne<TOrder | null>(request);
};

const payByOrder = async (orderGuid: string, password: string): Promise<number> => {
  // Need validation payment transaction and update order status in database. In this demo-project next code here as an simple example!
  const request = { orderGuid };
  const order = await ordersCollection.findOne<TOrder | null>(request);
  return order ? EHttpStatusCode.Ok : EHttpStatusCode.NotFound;
};

export { getOrderByGuid, payByOrder };
