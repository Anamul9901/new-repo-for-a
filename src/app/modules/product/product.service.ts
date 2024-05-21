import { ProductModel } from './product.model';
import { Product } from './product.interface';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const searchOrGetAllProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await ProductModel.find({
    $or: [{ name: regex }, { description: regex }, { category: regex }],
  });
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const updateProductIntoDB = async (id: string, product: Product) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, product, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getSingleProductFromDB,
  searchOrGetAllProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
