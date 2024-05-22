import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// order all route
router.post('/', OrderController.createOrder);

router.get('/', OrderController.searchOrGetAllOrder);

export const OrderRoutes = router;
