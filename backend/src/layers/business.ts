import { TOrder } from "../types/order";
import { ordersCollection } from "./database";

const getOrderByGuid = async (orderGuid: string): Promise<TOrder | null> => {
    return await ordersCollection.findOne<TOrder | null>({ orderGuid });
}

const payByOrder = async (orderGuid: string, password: string): Promise<number> => {
    // Need validation payment transaction and update order status in database. In this demo-project next code here as an simple example!
    const order = await ordersCollection.findOne<TOrder | null>({ orderGuid });
    const httpStatusCode = order ? 200 : 404;
    return httpStatusCode;
}

export { getOrderByGuid, payByOrder };
