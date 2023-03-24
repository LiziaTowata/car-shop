import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/MotorcyclesControllers';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post('/motorcycles', (req, res, next) => new MotorcyclesControllers(req, res, next).createMoto());

export default motorcyclesRoutes;
