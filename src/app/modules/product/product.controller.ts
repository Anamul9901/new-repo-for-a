import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: 'Product not created!',
    });
  }
};

const searchOrAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query as any;
    const result = await ProductService.searchOrGetAllProductFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',

      data: result,
    });
    // console.log(searchTerm);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: 'Products not found!',
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: 'Product not found!',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const result = await ProductService.updateProductIntoDB(productId, product);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: 'Product not updated!',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({
      success: false,
      message: 'Product not deleted!',
    });
  }
};

export const ProductController = {
  createProduct,
  searchOrAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
