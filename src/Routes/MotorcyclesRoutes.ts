import { Router } from 'express';
import MotorcyclesControllers from '../Controllers/MotorcyclesControllers';

const motorcyclesRoutes = Router();

motorcyclesRoutes.post('/motorcycles', (req, res, next) =>
  new MotorcyclesControllers(req, res, next).createMoto());

motorcyclesRoutes.get('/motorcycles', (req, res, next) =>
  new MotorcyclesControllers(req, res, next).listAllMoto());
  
motorcyclesRoutes.get('/motorcycles/:id', (req, res, next) =>
  new MotorcyclesControllers(req, res, next).getByIdMoto());
  

export default motorcyclesRoutes;
