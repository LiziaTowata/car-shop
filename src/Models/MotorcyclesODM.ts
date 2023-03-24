import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycles';
import ODMModel from './ODMModel';

export default class MotorcyclesODM extends ODMModel<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true}

      
    });
    super(schema, 'motorcycles');
  }

  public async createMoto(motorcycles: IMotorcycles): Promise<IMotorcycles> {
    return this.model.create({ ...motorcycles });
  }
}
