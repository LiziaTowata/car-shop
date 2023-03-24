import express from 'express';
import errorMidlleware from './Midlleware/ErrorMidlleware';
import carRoutes from './Routes/CarRoutes';
import motorcyclesRoutes from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcyclesRoutes);
app.use(errorMidlleware);

export default app;
