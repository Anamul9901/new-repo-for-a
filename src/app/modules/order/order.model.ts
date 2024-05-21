import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

export const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// //pre save middleware/ hook
// orderSchema.pre('save', function () {
//   console.log(this, 'pre hook : we will save data');
// });

// //post save middleware / hook
// orderSchema.post('save', function () {
//   console.log(this, 'post hook : we will save data');
// });

export const OrderModel = model<Order>('Order', orderSchema);
