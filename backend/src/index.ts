import * as express from 'express';
import * as cors from 'cors';
import { createOrderRouter } from './layers/routers/orderRouter';
import { startWebSocket } from './features/webSocket';
import { initLogger } from './features/logger/loggerCore';
import { connectMongoDb } from './layers/database/connectMongoDb';
import { apiUrl, host, port } from './config';

const startAppAsync = async () => {
  await initLogger();
  await connectMongoDb();

  const app = express()
    .use(cors())
    .use(express.json())
    .use(`${apiUrl}/order`, await createOrderRouter())
    .listen(port, () => console.log(`Server started at ${host}:${port}${apiUrl}`));

  startWebSocket(app);
};

startAppAsync();
