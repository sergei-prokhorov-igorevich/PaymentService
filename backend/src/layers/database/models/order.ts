import { Schema, model } from 'mongoose';

type TOrder = {
  orderGuid: string;
  orderId: string;
  payerId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
};

const orderSchema = new Schema<TOrder>({
  orderGuid: String,
  orderId: String,
  payerId: String,
  amount: Number,
  currency: String,
  paymentMethod: String,
});

const Order = model<TOrder>('Order', orderSchema, 'orders');

export { TOrder, Order };
