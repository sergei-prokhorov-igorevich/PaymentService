import * as express from 'express';
import * as cors from 'cors';
import { createOrderRouter } from './layers/routers/orderRouter';
import { initLogger } from './utils/logger';
import { createLoggerRouter } from './layers/routers/loggerRouter';
import { connectMongoDb } from './layers/database/connectMongoDb';

const apiUrl = '/api/v1';
const port = process.env.PORT || 81;

const startAppAsync = async () => {
  await initLogger();
  await connectMongoDb();

  const orderRouter = await createOrderRouter();
  const loggerRouter = createLoggerRouter();

  express()
    .use(cors())
    .use(express.json())
    .use(`${apiUrl}/order`, orderRouter)
    .use(`${apiUrl}/logger`, loggerRouter)
    .listen(port, () => console.log(`Server started at http://localhost:${port}${apiUrl}`));
};

startAppAsync();
