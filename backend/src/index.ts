import * as express from 'express';
import { createOrderRouter } from './layers/routers/orderRouter';
import { createPayRouter } from './layers/routers/payRouter';
import * as cors from 'cors';
import { initLogger } from './logger/logger';
import { createLoggerRouter } from './layers/routers/loggerRouter';

const api = '/api/v1';
const port = process.env.PORT || 80;

const startApp = async () => {
    initLogger();
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.listen(port, () => console.log(`Server started at http://localhost:${port}${api}`));

    const orderRouter = await createOrderRouter();
    app.use(`${api}/order`, orderRouter);

    const payRouter = await createPayRouter();
    app.use(`${api}/pay`, payRouter);

    const loggerRouter = await createLoggerRouter();
    app.use(`${api}/logger`, loggerRouter);
}

startApp();