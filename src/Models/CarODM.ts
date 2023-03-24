import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ErrorUtils from '../Util/ErrorUtil';
import ODMModel from './ODMModel';

export default class CarODM extends ODMModel<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'cars');
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async listAllCar(): Promise<ICar[]> {
    const result = await this.model.find();
    return result;
  }

  public async getByIdCar(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorUtils('Invalid mongo id', 422);
    }
    return this.model.findById(id);
  }
}
