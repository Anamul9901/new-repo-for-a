import { z } from 'zod';

// order validate by zod validation
const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  productId: z.string().min(1, 'Product ID is required'),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().int().positive('Quantity must be a positive integer'),
});

export default orderValidationSchema;
