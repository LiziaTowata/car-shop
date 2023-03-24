import { Router } from 'express';
import CarControllers from '../Controllers/CarControllers';

const carRoutes = Router();

carRoutes.post('/cars', (req, res, next) => new CarControllers(req, res, next).create());
carRoutes.get('/cars', (req, res, next) => new CarControllers(req, res, next).listAllCar());
carRoutes.get('/cars/:id', (req, res, next) => new CarControllers(req, res, next).getByIdCar());

export default carRoutes;
