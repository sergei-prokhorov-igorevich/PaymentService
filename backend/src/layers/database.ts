import { MongoClient } from 'mongodb';
import { mongodbConnectionString } from '../secret';

const ordersCollection = new MongoClient(mongodbConnectionString).db('PaymentService').collection('orders');

export { ordersCollection };
