import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { z } from 'zod';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // product data validation using zod
    const zodParsedData = productValidationSchema.parse(product);

    const result = await ProductService.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: err,
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
  } catch (err: any) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: err.message,
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
  } catch (err: any) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;

    const zodParsedData = productValidationSchema.parse(product);

    const result = await ProductService.updateProductIntoDB(
      productId,
      zodParsedData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: err,
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
  } catch (err: any) {
    console.log(err);

    res.status(404).json({
      success: false,
      message: 'product not found!',
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
