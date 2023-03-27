import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesServices from '../Services/MotorcyclesServices';

export default class MotorcyclesControllers {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private services: MotorcyclesServices;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.services = new MotorcyclesServices();
  }

  public async createMoto() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newObjMoto = await this.services.createMoto(moto);
      return this.res.status(201).json(newObjMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async listAllMoto() {
    const result = await this.services.listAllMoto();
    return this.res.status(200).json(result);
  }

  public async getByIdMoto() {
    const { id } = this.req.params;

    try {
      const resultMotoId = await this.services.getByIdMoto(id);
      return this.res.status(200).json(resultMotoId);
    } catch (error) {
      this.next(error);
    }
  }

  public async getUpDateMoto() {
    const { id } = this.req.params;
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newObjMoto = await this.services.getUpDateMoto(id, moto);
      return this.res.status(200).json(newObjMoto);
    } catch (error) {
      this.next(error);
    }
  }
}
