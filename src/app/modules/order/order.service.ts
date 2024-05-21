import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const searchOrGetAllOrderFromDb = async (email: string) => {
  const regex = new RegExp(email, 'i');
  const result = await OrderModel.find({email: regex});
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  searchOrGetAllOrderFromDb
};
