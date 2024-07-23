import 'dotenv/config'
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import { router } from './router/router.js';
import { errorMiddleware } from './middlewares/error-middleware.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => console.log('Server started on PORT ' + '\x1b[34m%s\x1b[0m', `http://localhost:${PORT}`))

    } catch (err) {
        console.log(err);
    }
}

start();