
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: process.env.ORIGIN
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cookieParser());


///rotes import 
import userRoutes from './routes/user.routes.js';


//routes declaration 
app.use('/api',userRoutes);   
export default app;