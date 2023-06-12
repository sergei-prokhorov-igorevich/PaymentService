import { MongoClient } from 'mongodb';
import { mongodbConnectionString } from '../secret';

const ordersCollection = new MongoClient(mongodbConnectionString).db('Moment').collection('orders');

export { ordersCollection };
