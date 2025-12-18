import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import router from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

connectCloudinary();

 //mw
app.use(express.json());
app.use(cors());


//routes

app.use('/api/users', router);
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {console.log("server starts")});
