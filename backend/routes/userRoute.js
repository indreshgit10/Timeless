import express from 'express';

import { registerUser, loginUser, adminlogin } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/adminlogin', adminlogin);

export default router;