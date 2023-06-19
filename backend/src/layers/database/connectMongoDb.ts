import { connect, connection } from 'mongoose';
import { mongodbConnectionString } from './secret';

async function connectMongoDb() {
  connection.on('error', console.error.bind(console, 'Mongoose connection error: '));
  connection.once('open', function () {
    console.log('Mongoose connected successfully');
  });

  await connect(mongodbConnectionString, { dbName: 'PaymentService' });
}

export { connectMongoDb };
