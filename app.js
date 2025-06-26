import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoute from "./routes/user.route.js"
import projectRoutes from './routes/project.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import aiRoutes from './routes/ai.routes.js';


connect();//Connect to the database

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users',userRoute);
app.use('/projects',projectRoutes);
app.use("/ai", aiRoutes)

app.get('/',(req,res)=>{
  res.send('Hello World');
})


export default app;