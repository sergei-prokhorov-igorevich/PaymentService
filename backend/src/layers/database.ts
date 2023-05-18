import { MongoClient } from 'mongodb';
import { mongodbConnectionString } from '../secret';

const client = new MongoClient(mongodbConnectionString);
const database = client.db('Moment');
const ordersCollection = database.collection('orders');

export { ordersCollection }