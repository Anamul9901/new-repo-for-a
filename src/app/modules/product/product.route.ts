import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// all product route method
router.post('/', ProductController.createProduct);

router.get('/', ProductController.searchOrGetAllProduct);

router.get('/:productId', ProductController.getSingleProduct);

router.put('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);






export const ProductRoutes = router;
