import "reflect-metadata";
import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import './database'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333,() => {
  console.log('Server started in port 3333');
})