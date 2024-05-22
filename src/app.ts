import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

//all parsers
app.use(express.json());
app.use(cors());

//all application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

// wrong route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Rout is not found',
  });
});

// global error handler
app.use((error: any, req: Request, res: Response) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: 'faild to get data from global error handler',
    });
  }
});

export default app;
