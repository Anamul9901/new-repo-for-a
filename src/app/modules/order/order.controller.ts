import { Request, Response } from 'express';
import { OrderService } from './order.service';
import orderValidationSchema from './order.validation';
import { ProductModel } from '../product/product.model';

// post a order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // order data validation using zod
    const zodParsedData = await orderValidationSchema.parseAsync(order);
    const product = await ProductModel.findById(zodParsedData.productId);

    // if product id and order productId is not same then return false
    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Order not found',
      });
    }

    // if product quantity <= 0 then save product isStock = false and return false
    if (product?.inventory.quantity <= 0) {
      product.inventory.inStock = false;
      await product.save();
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    // if product quantity <= 0 or less then order quantity then return false
    if (
      product?.inventory.quantity <= 0 ||
      product?.inventory.quantity < order.quantity
    ) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    // if product quantity is finished then save product inStock = false.
    if (product?.inventory.quantity == order.quantity) {
      product.inventory.inStock = false;
      await product.save();
    }

    // if order successfull then decress product quantity
    product.inventory.quantity -= order.quantity;
    await product.save();

    const result = await OrderService.createOrderIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: 'Order not found',
    });
  }
};

// get all order or search order
const searchOrGetAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as any;
    const result = await OrderService.searchOrGetAllOrderFromDb(email);

    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      return: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const OrderController = {
  createOrder,
  searchOrGetAllOrder,
};
