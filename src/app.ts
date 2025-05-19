import { Request, Response } from 'express';
import router from './Routes';
import cors from 'cors';
import NotFound from './middeleware/NotFound/NotFound';
import globalErrorHandler from './app/Error/GlobarErrorHandeler/GlobalErrorHandeler';
const express = require('express');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('My PortFolio');
});
app.use(NotFound);
app.use(globalErrorHandler);
export default app;
