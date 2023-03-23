import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarServices from '../Services/CarServices';

export default class CarControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private services: CarServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.services = new CarServices();
  }
  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newObjCar = await this.services.create(car);
      return this.res.status(201).json(newObjCar);
    } catch (error) {
      this.next(error);
    }
  }
}
