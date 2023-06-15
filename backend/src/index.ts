import * as express from 'express';
import * as cors from 'cors';
import { createOrderRouter } from './layers/routers/orderRouter';
import { createPayRouter } from './layers/routers/payRouter';
import { initLogger } from './logger/logger';
import { createLoggerRouter } from './layers/routers/loggerRouter';

const apiUrl = '/api/v1';
const port = process.env.PORT || 81;

const startAppAsync = async () => {
  await initLogger();

  const orderRouter = await createOrderRouter();
  const payRouter = await createPayRouter();
  const loggerRouter = await createLoggerRouter();

  express()
    .use(cors())
    .use(express.json())
    .use(`${apiUrl}/order`, orderRouter)
    .use(`${apiUrl}/pay`, payRouter)
    .use(`${apiUrl}/logger`, loggerRouter)
    .listen(port, () => console.log(`Server started at http://localhost:${port}${apiUrl}`));
};

startAppAsync();
