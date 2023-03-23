import { Router } from 'express';
import CarControllers from '../Controllers/CarControllers';

const carRoutes = Router();

carRoutes.post('/cars', (req, res, next) => new CarControllers(req, res, next).create());

export default carRoutes;
