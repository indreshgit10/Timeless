import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/add',upload.fields([{name:'image1', maxcount:1},{name:'image2', maxcount:1},{name:'image3', maxcount:1}, {name:'image4', maxcount:1}]), addProduct);
router.post('/remove', removeProduct);
router.get('/list', listProducts);
router.post('/single', singleProduct);

export default router;