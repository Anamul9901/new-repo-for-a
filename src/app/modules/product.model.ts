import { Schema, model } from 'mongoose';
import { Inventory, Product, Variants } from './product/product.interface';

const variantsSchema = new Schema<Variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStack: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantsSchema], required: true },
  inventory: { type: [inventorySchema], required: true },
});

// const ProductModel = model<Product>('product', productSchema);