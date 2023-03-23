import express from 'express';
import errorMidlleware from './Midlleware/ErrorMidlleware';
import carRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(errorMidlleware);

export default app;
