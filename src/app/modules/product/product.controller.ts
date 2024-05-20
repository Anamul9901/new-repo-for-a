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
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
};
