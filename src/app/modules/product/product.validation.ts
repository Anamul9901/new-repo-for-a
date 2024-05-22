import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().int().min(0, 'Quantity must be a positive number'),
  inStock: z.boolean(),
});

// validate product schema by zod validation
const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
