import * as express from 'express';
import { createOrderRouter } from './layers/routers/orderRouter';
import { createPayRouter } from './layers/routers/payRouter';
import * as cors from 'cors';

const api = '/api/v1';
const port = process.env.PORT || 80;

const startApp = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.listen(port, () => console.log(`Server started at http://localhost:${port}`));

    const orderRouter = await createOrderRouter();
    app.use(`${api}/order`, orderRouter)

    const payRouter = await createPayRouter();
    app.use(`${api}/pay`, payRouter)
}

startApp();