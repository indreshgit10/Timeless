import express from 'express';

import { registerUser, loginUser, adminlogin } from '../controllers/userController.js';

const productrouter = express.Router();

productrouter.post('/register', registerUser);
productrouter.post('/login', loginUser);
productrouter.post('/adminlogin', adminlogin);

export default productrouter;