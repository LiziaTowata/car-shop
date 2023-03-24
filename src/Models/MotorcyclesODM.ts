import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ErrorUtils from '../Util/ErrorUtil';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      
    });
    super(schema, 'motorcycles');
  }

  public async createMoto(motorcycles: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycles });
  }

  public async listAllMoto(): Promise<IMotorcycle[]> {
    const result = await this.model.find();
    return result;
  }

  public async getByIdMoto(id:string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorUtils('Invalid mongo id', 422);
    }
    return this.model.findById(id);
  }
}
