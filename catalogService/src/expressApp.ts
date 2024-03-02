import express from 'express';
import catalogRouter from './api/catalog.routes';

//const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use('/', catalogRouter);



export default app;