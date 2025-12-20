// import express from 'express';
// import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js';

// const router = express.Router();

// router.post('/add',upload.fields([{name:'image1', maxcount:1},{name:'image2', maxcount:1},{name:'image3', maxcount:1}, {name:'image4', maxcount:1}]), addProduct);
// router.post('/remove', removeProduct);
// router.get('/list', listProducts);
// router.post('/single', singleProduct);

// export default router;

import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
const router = express.Router();

router.post(
  '/add', adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
  ]),
  addProduct
);


router.post('/remove', adminAuth, removeProduct);
router.get('/list',adminAuth, listProducts);
router.post('/single',adminAuth, singleProduct);

export default router;
