import { ProductModel } from './product.model';
import { Product } from './product.interface';

// create a product by post method.
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// search by name desciption and category and find product by get method.
const searchOrGetAllProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await ProductModel.find({
    $or: [{ name: regex }, { description: regex }, { category: regex }],
  });
  return result;
};

// fing a product by id
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// update a product by id
const updateProductIntoDB = async (id: string, product: Product) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, product, {
    new: true,
  });
  return result;
};

// delete a product by id
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
